import React from "react";
import ReturnButton from '../../components/ReturnButton';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold md-6">Embedding Meshes</h1>
                <ReturnButton className="md-6" />
            </div>
            <div className="flex flex-col gap-4">
                <img src="/images/meshes/屏幕截图 2025-02-03 232423.png" alt="" className="w-full h-auto" />
                <img src="/images/meshes/屏幕截图 2025-02-03 232527.png" alt="" className="w-full h-auto" />
                <img src="/images/meshes/屏幕截图 2025-02-03 232644.png" alt="" className="w-full h-auto" />
                <img src="/images/meshes/屏幕截图 2025-02-03 233314.png" alt="" className="w-full h-auto" />
                <img src="/images/meshes/屏幕截图 2025-02-03 233533.png" alt="" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Home;
