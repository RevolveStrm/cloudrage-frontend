'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';

interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
}

export const FormInput: React.FC<Props> = ({ name, label, placeholder, className, ...props }) => {
    const form = useFormContext();
    
    const value: string = form.watch(name);

    const errorText = form.formState.errors?.[name]?.message as string;

    return (
        <div className={cn('w-full', className)}>
          {label && <p className='text-md mb-1'>{label}</p>}
          
          <div className='relative'>
            <Input
              value={value}
              placeholder={placeholder}
              {...form.register(name)}
              {...props}
            />
          </div>

          {errorText && <p className='mt-2 text-sm text-red-500'>{errorText}</p>}
        </div>
    );
}