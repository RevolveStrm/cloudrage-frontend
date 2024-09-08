import { cn } from '@/lib/utils';
import { Loader2Icon } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => {
    return (
      <Loader2Icon className={cn("animate-spin", className)} color='white'/>
    );
}