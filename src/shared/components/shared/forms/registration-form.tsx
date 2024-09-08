'use client';

import React from 'react';
import { RegistrationData, registrationSchema } from '@/shared/constants/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '../form-input';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import { Api } from '@/shared/services/api';
import { setCookie } from 'nookies';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Props {
    className?: string;
}

export const RegistrationForm: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    const form = useForm<RegistrationData>({
        defaultValues: {
            email: '',
            fullName: '',
            password: '',
            confirmPassword: ''
        },
        resolver: zodResolver(registrationSchema)
    });

    const onSubmit = async (data: RegistrationData) => {
        try {
            const { token } = await Api.authService.register(data);
            
            if (!token) {
                toast.error('Registration service is currently unavailable. Please try again later.');
                return;
            }
            setCookie(null, 'token', token);

            toast.success('Registration completed. Redirecting you to your files...');

            router.push('/dashboard');
        } catch (error) {
            console.error(error);
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <FormProvider {...form}>
            <form 
                className={cn("flex flex-col gap-5 p-5 w-full", className)} 
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormInput name='email' placeholder='Email' label='Email'/>
                <FormInput name='fullName' placeholder='Full Name' label='Full name'/>
                <FormInput name='password' placeholder='Password' label='Password'/>
                <FormInput name='confirmPassword' placeholder='Confirm password' label='Confirm password'/>

                <Button disabled={form.formState.isSubmitting}>
                    { form.formState.isSubmitting ? 'Creating an account...' : 'Create an account' }
                </Button>
            </form>
        </FormProvider>
    );
}