import React from "react";
import Link from 'next/link';
import ReturnButton from '../../components/ReturnButton';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold md-6">Cryptocurrency Trading Prediction</h1>
                <ReturnButton className="md-6" />
            </div>
            <Link
                href="https://docs.google.com/presentation/d/15HdNnMmZaXlVQQXMsP1eFVbwUEaHTxe1/edit?usp=drive_link&ouid=101566243362078619959&rtpof=true&sd=true"
                className="text-3xl text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Introduction
            </Link>
            <div className="flex flex-col gap-4">
                <p className="text-xl">data in .csv and samples in .pkl</p>
                <img src="/images/cnn/屏幕截图 2025-02-03 224643.png" alt="" className="w-full h-auto" />
                <p className="text-xl">accuracy_curve</p>
                <img src="/images/cnn/accuracy_curve.png" alt="" className="w-full h-auto" />
                <p className="text-xl">loss_curve</p>
                <img src="/images/cnn/loss_curve.png" alt="" className="w-full h-auto" />
                <p className="text-xl">confusion_matrix</p>
                <img src="/images/cnn/confusion_matrix.png" alt="" className="w-full h-auto" />
                <p className="text-xl">roc_curves</p>
                <img src="/images/cnn/roc_curves.png" alt="" className="w-full h-auto" />
                <p className="text-xl">classification_report</p>
                <div className="bg-white p-6 rounded shadow">
                    <pre className="whitespace-pre-wrap text-sm">
                        {`              precision    recall  f1-score   support

          -1       0.62      0.65      0.64     21662
           0       0.72      0.71      0.72     46597
           1       0.60      0.59      0.59     21715

    accuracy                           0.67     89974
   macro avg       0.65      0.65      0.65     89974
weighted avg       0.67      0.67      0.67     89974`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Home;
