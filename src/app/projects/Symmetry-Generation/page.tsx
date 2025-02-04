import React from "react";
import ReturnButton from '../../components/ReturnButton';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold md-6">Symmetry Generation</h1>
                <ReturnButton className="md-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-6"> Prompt: A Gingerbread Man</h3>
            </div>
            <div className="flex flex-col gap-4">
                <Image src="/images/escher/WechatIMG3688.jpg" alt="" className="w-full h-auto" width={800} height={600} />
                <Image src="/images/escher/WechatIMG3689.jpg" alt="" className="w-full h-auto" width={800} height={600} />
                <Image src="/images/escher/WechatIMG3686.jpg" alt="" className="w-full h-auto" width={800} height={600} />
                <Image src="/images/escher/WechatIMG3687.jpg" alt="" className="w-full h-auto" width={800} height={600} />
                <Image src="/images/escher/WechatIMG3693.jpg" alt="" className="w-full h-auto" width={800} height={600} />
                <Image src="/images/escher/WechatIMG3694.jpg" alt="" className="w-full h-auto" width={800} height={600} />
            </div>
        </div>
    );
};

export default Home;
