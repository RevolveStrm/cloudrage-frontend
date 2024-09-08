import React, { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

interface Props {
    className?: string;
}

export const Providers: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <>
            {children}
            <Toaster
                gutter={10}
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    );
}