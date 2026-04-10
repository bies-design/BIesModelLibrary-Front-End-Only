"use server";

import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { SignUpSchema } from "@/lib/validations";
import { success } from "zod";

interface AuthCredentials {
    username?: string;
    email: string;
    password?: string;
}


/**
 * 使用憑證（電子郵件與密碼）進行註冊的 Server Action
 * @param params 包含 username, email, password 的物件
 */
export async function signUpWithCredentials(params: AuthCredentials) {
  const { username, email, password } = params;

  // 1. 基本檢查：確保必要欄位存在
  if (!username || !password) {
    return { success: false, error: "Username and password are required" };
  }

  // 2. 使用 Zod Schema 進行資料驗證
  const validationResult = SignUpSchema.safeParse({ username, email, password, name: username });

  if (!validationResult.success) {
    // 回傳第一個驗證錯誤訊息
    return { success: false, error: validationResult.error.issues[0].message };
  }

  try {
    // 使用 Prisma Transaction 確保原子性
    // 同步成敗,自動回滾,tx 是一個專門用於此事務的臨時客戶端實例。
    await prisma.$transaction(async (tx)=>{
      // 1. 檢查 Email (使用 findUnique)
      const existingUserByEmail = await tx.user.findUnique({
        where:{ email:email },
      });
      if(existingUserByEmail) throw new Error("Email already exists");

      //2.檢查userName
      const existingUserByName = await tx.user.findUnique({
        where: { userName: username },
      })
      if(existingUserByName) throw new Error("userName already exists");

      // 3. 密碼雜湊
      const hashedPassword = await bcrypt.hash(password,12);

      // 4. 建立 User
      const newUser = await tx.user.create({
        data:{
          userName: username,
          email:email,
          role:"Free",
          image:"",// 如果 Schema 是 Optional (String?) 可以不傳，否則傳空字串
        },
      });

      // 5. 建立 Account (連結剛建立的 userId)
      await tx.account.create({
        data:{
          userId: newUser.id,// Prisma 自動生成的 ID
          password: hashedPassword,
          provider:"credentials",
          providerAccountId: newUser.id,
        },
      });
    });

    return {success:true};

  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred"
    };
  } 
}
