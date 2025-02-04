'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
    className?: string;
    children?: React.ReactNode;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '', children }) => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <button
            onClick={handleGoBack}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ${className}`}
        >
            {children || 'Return'}
        </button>
    );
};

export default BackButton;