import { z } from "zod";

// Schema for Sign In - username-based authentication
export const SignInSchema = z.object({
    // Username validation for login
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long." })
        .max(30, { message: "Username cannot exceed 30 characters." })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message:
            "Username can only contain letters, numbers, and underscores.",
        }),

    password: z
        .string()
        .min(6, { message: "password must be at least 6 characters." })
        .max(100, { message: "password cannot exceed 100 characters." }),
});

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long." })
        .max(30, { message: "Username cannot exceed 30 characters." })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message:
            "Username can only contain letters, numbers, and underscores.",
        }),

    email: z
        .email({ message: "Please provide a valid email address." })
        .min(1, { message: "Email is required." }),

    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .max(100, { message: "Password cannot exceed 100 characters." })
        .regex(/[A-Z]/, {
            message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[a-z]/, {
            message: "Password must contain at least one lowercase letter.",
        })
        .regex(/[0-9]/, { message: "Password must contain at least one number." }),
});1

// 1. 給修改名稱用的 Schema (直接重用 SignUpSchema 的 username 規則)
export const UpdateNameSchema = z.object({
    username: SignUpSchema.shape.username, 
});

// 2. 給修改密碼用的 Schema (包含新舊密碼比對)
export const UpdatePasswordSchema = z.object({
    currentPassword: z.string().min(1, { message: "Current password is required." }),
    // 重用你寫好的超強密碼規則！
    newPassword: SignUpSchema.shape.password, 
    confirmPassword: z.string().min(1, { message: "Please confirm your new password." }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match.",
    path: ["confirmPassword"], // 錯誤訊息會綁定在 confirmPassword 欄位上
});

// 3. 給修改 Email 用的 Schema
export const UpdateEmailSchema = z.object({
    email: SignUpSchema.shape.email,
});