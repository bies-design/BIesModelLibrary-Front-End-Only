'use client';
import React from 'react';
import { AuthForm } from '@/components/forms/AuthForms';
import { signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  return (
    <AuthForm
      formType='SIGN_IN'
      defaultValues={{username: '', password: ''}}
      // Call NextAuth's signIn method
      onSubmit={async (data) => {
        const result = await signIn('credentials', {
          username: data.username,
          password: data.password,
          redirect:false,
        });

        if (result?.error) {
          return { success: false, error: "Invalid username or password" };
        }

        
        router.push('/');
        return { success: true};       
      }}
    />
    )
}

export default SignIn