"use client"
import React from "react";
import ReturnButton from '../../components/ReturnButton';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold md-6">Data Analysis Intern</h1>
                <ReturnButton className="md-6" />
            </div>
            <div className="flex flex-col gap-4">
                <img src="/images/IMG_0772.png" alt="certificate of internship" className="w-full h-auto" />
                <img src="/images/IMG_0773.png" alt="recommendation letter" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Home;
