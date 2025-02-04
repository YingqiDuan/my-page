// src/app/not-found.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <section className="animate-fadeIn p-6">
            <div className="text-center">
                <h1 className="text-4xl font-semibold">404 - Page not found</h1>
                <button
                    onClick={handleGoBack}
                    className="mt-6 text-2xl inline-block text-blue-500 hover:underline"
                >
                    Return
                </button>
            </div>
        </section>
    );
};

export default NotFound;
