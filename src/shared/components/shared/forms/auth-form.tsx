'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LoginForm } from './login-form';
import { RegistrationForm } from './registration-form';

interface Props {
    className?: string;
}

export const AuthForm: React.FC<Props> = ({ className }) => {
  const [authType, setAuthType] = React.useState<'login' | 'registration'>('login');

  return (
    <div className={cn("mt-[200px] w-[450px] flex flex-col items-center", className)}>
      <h1 className="font-extrabold text-2xl text-left">{authType === 'login' ? 'Login' : 'Registration'}</h1>
      {
        authType === 'login' ?
          <LoginForm /> :
          <RegistrationForm />
      }

      <div>
        {authType === 'login' ? 
          (<p>Don't have an account? <span 
            className="text-blue-500 font-bold cursor-pointer"
            onClick={() => setAuthType('registration')}
            >
              Create account
            </span> </p>) : 
          (<p>Already have an account ? <span
            className="text-blue-500 font-bold cursor-pointer"
            onClick={() => setAuthType('login')}
            >
              Login
            </span></p>)
        }
      </div>
    </div>
  );
}