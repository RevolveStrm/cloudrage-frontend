'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { LoginData, loginSchema } from '@/shared/constants/auth.schema';
import { cn } from '@/lib/utils';
import { FormInput } from '../form-input';
import { Button } from '../../ui/button';
import { Api } from '@/shared/services/api';
import toast from 'react-hot-toast';
import { destroyCookie, setCookie } from 'nookies';
import { useRouter } from 'next/navigation';

interface Props {
    className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    const form = useForm<LoginData>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginData) => {
        try {
            const { token } = await Api.authService.login(data);

            if (!token) {
                toast.error('Authentication service is currently unavailable. Please try again later.');
                return;
            }
            setCookie(null, 'token', token);

            toast.success('Welcome back!. Redirecting you to your files...');

            router.push('/dashboard');
        } catch (error) {
            destroyCookie(null, 'token');
            console.error(error);
            toast.error('Authentication failed. Please try again.');
        }
    };

    return (
        <FormProvider {...form}>
            <form 
                className={cn("flex flex-col gap-5 p-5 w-full", className)} 
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormInput name='email' placeholder='Email' label='Email'/>
                <FormInput name='password' placeholder='Password' label='Password'/>

                <Button disabled={form.formState.isSubmitting} className='hover:bg-foreground transition-colors duration-500'>
                    { form.formState.isSubmitting ? 'Logging in...' : 'Login into account' }
                </Button>
            </form>
        </FormProvider>
    );
}