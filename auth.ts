// auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import {prisma} from '@/lib/prisma';
import { SignInSchema } from "@/lib/validations";

export const { handlers, signIn, signOut, auth } = NextAuth({
    // Configure authentication providers
    providers: [
        Google,
        Credentials({
            // Custom credentials login logic
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // 1. Validate input format against SignInSchema (now using username)
                const validatedData = SignInSchema.safeParse(credentials);

                if (validatedData.success) {
                    const { username, password } = validatedData.data;
                    
                    //1.尋找使用者 (By userName)
                    const user = await prisma.user.findUnique({
                        where: {userName:username}
                    });

                    if(!user) return null;

                    //2.尋找對應account
                    // 因為 userId + provider 組合在 Schema 中通常沒有 @unique 索引，所以用 findFirst
                    const account = await prisma.account.findFirst({
                        where:{
                            userId:user.id,
                            provider:"credentials",
                        }
                    });

                    if(!account || !account.password) return null;

                    // 3.驗證密碼
                    const passwordMatch = await bcrypt.compare(password, account.password);

                    if(passwordMatch){
                        return{
                            id: user.id,
                            name: user.userName,
                            email:user.email,
                            image: user.image,
                            role: user.role,
                        };
                    }
                }
                // Authentication failed
                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({user, account}){
            if(account?.provider === "credentials") return true;
            if(!user.email || !user.name) return false;

            try{
                // 1.檢查使用者是否存在
                const existingUser = await prisma.user.findUnique({
                    where:{email: user.email}
                });

                if(!existingUser){
                    // A. 使用者不存在 -> 建立 User + Account (使用 Nested Write)
                    await prisma.user.create({
                        data:{
                            userName: user.name.replace(/\s+/g,"").toLowerCase(),
                            email: user.email,
                            image: user.image,
                            role: "Free",
                            accounts:{
                                create:{
                                    provider: account?.provider || "unknown",
                                    providerAccountId: account?.providerAccountId || "unknown",
                                }
                            }
                        }
                    });
                }else{
                    // B. 使用者存在 -> 檢查是否已連結此 Provider 的 Account
                    // 如果你在 schema 中設定了 @@unique([provider, providerAccountId])
                    if (!account?.provider || !account?.providerAccountId) {
                        throw new Error("Missing provider information");
                    }

                    const existingAccount = await prisma.account.findUnique({
                        where: {
                            provider_providerAccountId:{
                                provider: account?.provider,
                                providerAccountId: account?.providerAccountId,
                            }
                        }
                    });

                    if(!existingAccount){
                        // 如果沒有連結，則建立新 Account 綁定到舊 User
                        await prisma.account.create({
                            data:{
                                userId: existingUser.id,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                            }
                        });
                    }
                }
                return true;
            }catch(error){
                console.error("SignIn Error",error);
                return false;
            }
        },
        // 強制使用 DB 的資料 就算用OAuth 回傳時有gmail的照片跟名字
        async jwt({token,user,trigger,account,session}){
            if(user && trigger === "signIn"){
                // 1. 如果是 Google 登入，user 物件是 Google 給的 (Shedy Moon)
                // 2. 如果是 Credentials 登入，user 物件是資料庫給的 (原本的 userName)
                
                // 為了確保一致性，我們在這裡統一查一次資料庫，拿到最準確的 User 資訊
                // (雖然會多一次 DB 查詢，但只在登入時發生一次，效能影響很小)
                const dbUser = await prisma.user.findUnique({
                    where: {email : user.email!}
                });

                if(dbUser){
                    // ✅ 強制覆蓋 Token 裡的資料
                    token.id = dbUser.id;
                    token.name = dbUser.userName; // 使用資料庫的 userName
                    token.picture = dbUser.image; // 使用資料庫的 image (如果是空的就不會有圖)
                    token.role = dbUser.role;     // 連 role 也可以一起帶
                } 
            }
            if(trigger === "update" && session){
                
                if(session.name){
                    token.name = session.name;
                }

                if (session.image) {
                    token.picture = session.image;
                }
            }
            // 如果不是剛登入 (session check)，token 裡已經有我們上次存好的 dbUser 資料了，直接回傳即可
            return token;
        },
        async session({session, token}){
            // 將 token 中的 user id 放入 session
            if(session.user && token.id){
                // 直接從 Token 拿出來塞給 Session
                session.user.id = token.id as string;
                session.user.name = token.name;
                session.user.image = token.picture;
                session.user.role = token.role;
            }
            // 注意：原本 Mongoose 的 OAuth 再查詢邏輯可以簡化
            // 因為 JWT callback 已經把正確的 id 傳遞下來了，
            // 除非你需要即時更新 session 中的資料，否則不需要再查一次 DB。   
            // like 「即時」更新權限 free to pro or user banned,
            return session;
        },
    },
});