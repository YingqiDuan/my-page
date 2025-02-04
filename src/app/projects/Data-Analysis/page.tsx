"use client"
import React from "react";
import ReturnButton from '../../components/ReturnButton';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold md-6">Data Analysis Intern</h1>
                <ReturnButton className="md-6" />
            </div>
            <div className="flex flex-col gap-4">
                <Image src="/images/IMG_0772.png" alt="certificate of internship" className="w-full h-auto" width={800} height={600} />
                <Image src="/images/IMG_0773.png" alt="recommendation letter" className="w-full h-auto" width={800} height={600} />
            </div>
        </div>
    );
};

export default Home;
