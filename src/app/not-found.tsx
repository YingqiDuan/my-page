// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
    return (
        <section className="animate-fadeIn p-6">
            <div className="text-center">
                <h1 className="text-4xl font-semibold">404 - Page not found</h1>
                <Link href="/" className="mt-6 inline-block text-blue-500 hover:underline">
                    Return Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
