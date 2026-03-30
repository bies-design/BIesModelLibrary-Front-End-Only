import React from "react";
import {Form, Input, Button} from "@heroui/react";
import {useRouter} from "next/navigation";
import {Eye,EyeOff} from "lucide-react";
import { SignInSchema, SignUpSchema } from "@/lib/validations";
import { z } from "zod";

type AuthFormType = "SIGN_IN" | "SIGN_UP";

type AuthFormProps<TValues extends Record<string, string>> = {
    schema?: z.ZodType<TValues>;
    defaultValues: TValues;
    formType: AuthFormType;
    onSubmit: (values: TValues) => Promise<{success: boolean, error?: string}>;
};

type ErrorMap = Record<string, string>;

function getLabelFromName(name: string) {
    if (name === "email") return "Email Address";
    if (name === "password") return "Password";
    if (name === "confirmPassword") return "Confirm Password";
    // 其他欄位：首字母大寫
    return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Validates form data using Zod schemas defined in Validation.ts
 * @param formType - Either "SIGN_IN" or "SIGN_UP"
 * @param data - The current form values
 * @returns An object containing field names as keys and error messages as values
 */
function validateWithZod(
    formType: AuthFormType,
    data: Record<string, string>
): ErrorMap {
    // Select the appropriate schema based on form type
    const schema = formType === "SIGN_IN" ? SignInSchema : SignUpSchema;
    
    const result = schema.safeParse(data);
    const errors: ErrorMap = {};

    // If validation fails, map Zod issues to our ErrorMap format
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            const path = issue.path[0] as string;
            // Only keep the first error for each field
            if (!errors[path]) {
                errors[path] = issue.message;
            }
        });
    }

    // Manual check for confirmPassword (since it depends on the password field)
    if (formType === "SIGN_UP") {
        if (!data.confirmPassword) {
            errors.confirmPassword = "Please confirm your password.";
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
    }

    return errors;
}

export function AuthForm<TValues extends Record<string, string>>(
props: AuthFormProps<TValues>
) {
const {defaultValues, formType, onSubmit} = props;
const router = useRouter();

const [values, setValues] = React.useState<TValues>(defaultValues);
const [errors, setErrors] = React.useState<ErrorMap>({});
const [isSubmitting, setIsSubmitting] = React.useState(false);

const handleChange = (name: string, value: string) => {
    // 1. Update local state with the new value
    const newValues = {...values, [name]: value} as TValues;
    setValues(newValues);

    // 2. Perform real-time validation for the changed field
    const allErrors = validateWithZod(formType, newValues);
    setErrors((prev) => {
        const next = { ...prev };
        if (allErrors[name]) {
            next[name] = allErrors[name];
        } else {
            delete next[name];
        }
        return next;
    });
};

const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as TValues;

    // Perform full form validation before submission
    const newErrors = validateWithZod(formType, data);
    setErrors(newErrors);

    // Stop submission if there are any validation errors
    if (Object.values(newErrors).some(Boolean)) {
        return;
    }

    setIsSubmitting(true);
    try {
        const result = await onSubmit(data);
        // 成功
        if (result.success) {
            if (formType === "SIGN_UP") {
                // 如果是註冊成功，跳轉到登入頁
                router.push("/sign-in");
            } else {
                // 如果是登入成功，通常 NextAuth 會處理，或是你可以跳轉到首頁
                router.push("/"); 
                router.refresh();
            }
            return; // 成功後直接結束，不執行下面的錯誤處理
        }
        // 失敗
        // Handle server-side errors (e.g., duplicate email or invalid credentials)
        if (!result.success && result.error) {
            const errorMsg = result.error.toLowerCase();
            if (errorMsg.includes("email")) {
                setErrors(prev => ({...prev, email: result.error as string}));
            } else if (errorMsg.includes("username") || errorMsg.includes("user") || errorMsg.includes("credential")) {
                // Map "user not found", "username", or "credentials" errors to the username field
                setErrors(prev => ({...prev, username: result.error as string}));
            }
        }
    } finally {
        setIsSubmitting(false);
    }
};

const submitLabel = formType === "SIGN_IN" ? "Sign In" : "Sign Up";
const submittingLabel =
    formType === "SIGN_IN" ? "Signing In..." : "Signing Up...";
const switchText =
    formType === "SIGN_IN"
    ? "Don't have an account?"
    : "Already have an account?";
const switchLinkText = formType === "SIGN_IN" ? "Sign up" : "Sign in";

// 這裡只負責渲染連結文字，實際切換路由由外層處理
const handleSwitchClick = () => {
    if(formType === "SIGN_IN") {
        router.push("/sign-up");
    }else{
        router.push("/sign-in");
    }
};
//for password visibility toggle
const [isVisible, setIsVisible] = React.useState(false);
const toggleVisibility = () => {
    setIsVisible(!isVisible);
}

return (
    <Form
    className="w-full space-y-3"
    validationBehavior="aria"
    validationErrors={errors}
    onSubmit={handleSubmit}
    >
    <div className="space-y-4 w-full">

        {Object.keys(defaultValues).map((name) => {
        const value = values[name] ?? "";
        const error = errors[name];
        const label = getLabelFromName(name);
        const isPasswordField = name === "password" || name === "confirmPassword";
        const type = isPasswordField ? "password" : "text";
        const isRequired = true;

        return (
            <Input
            fullWidth
            key={name}
            name={name}
            label={label}
            labelPlacement="inside"
            isRequired={isRequired}
            type={type === "password" ? (isVisible ? "text" : "password") : (name === "email" ? "email" : "text")}
            value={value}
            onValueChange={(v) => handleChange(name, v)}
            isInvalid={!!error}
            errorMessage={error ?? undefined}
            placeholder={`Enter your ${label}`}
            classNames={{
                inputWrapper:
                "bg-white dark:bg-[#27272A] shadow-[0px_3px_2px_rgba(255,255,255,0.18),0px_0px_4px_rgba(255,255,255,0.24),inset_0px_3px_5px_rgba(0,0,0,0.64),inset_0px_-1px_2px_rgba(0,0,0,0.6)]",
            }}
            endContent={
                isPasswordField ? (
                <button
                    type="button"
                    onClick={toggleVisibility}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    className="focus:outline-none"
                >
                    {!isVisible ? <EyeOff className="text-black dark:text-white" size={20} /> : <Eye className="text-black dark:text-white" size={20}/>}
                </button>
                ) : null
            }
            />

        );
        })}

        <Button
        type="submit"
        color="primary"
        className="font-inter w-full shadow-[0px_0px_5px_rgba(0,0,0,0.70),inset_0px_-4px_5px_rgba(0,0,0,0.25),inset_0px_4px_5px_rgba(255,255,255,0.2)]"
        isDisabled={isSubmitting}
        >
        {isSubmitting ? submittingLabel : submitLabel}
        </Button>
        
    </div>

    <div className="pl-30 mt-0 text-sm text-default-500">
        {switchText}{" "}
        <button
        type="button"
        onClick={handleSwitchClick}
        className="hover:cursor-pointer font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400"
        >
        {switchLinkText}
        </button>
    </div>
    {/* -------OR------ */}
        <div className="flex items-center w-full gap-4 mt-0 mb-3">
            {/* 左邊的線：h-px 是高度 1px，flex-1 讓它自動佔滿空間 */}
            <div className="h-[1px] bg-zinc-700 flex-1" />
            
            {/* 中間的文字 */}
            <span className="text-black dark:text-zinc-500  text-xs uppercase">
                OR
            </span>
            
            {/* 右邊的線 */}
            <div className="h-[1px] bg-zinc-700 flex-1" />
        </div>
    </Form>
);
}