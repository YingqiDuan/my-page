// src/app/not-found.tsx
'use client';

import React from 'react';
import ReturnButton from './components/ReturnButton'

const NotFound: React.FC = () => {
    return (
        <section className="animate-fadeIn p-6">
            <div className="text-center">
                <h1 className="text-4xl font-semibold">404 - Page not found</h1>
                <ReturnButton className="mt-6" />
            </div>
        </section>
    );
};

export default NotFound;
