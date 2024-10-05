"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import back from '../assets/back.svg';

export default function Instruction() {    
    const router = useRouter();
    const handleContinue = () => {
        router.push("./leaderDashboard");
    };
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/instruction.pdf';
        link.download = 'instruction.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={back}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background"
                />
            </div>
            <div className="flex flex-col w-[90%] md:w-[60%] lg:w-[40%] border-black border rounded-xl shadow-xl overflow-hidden">
                <div className="flex justify-center items-center bg-white py-4 px-6 h-[11vh] border-black border-b">
                    <h1 className="text-3xl font-semibold">Check Instructions</h1>
                </div>
                <div className="bg-[#F3F4F6] h-[60vh] overflow-y-auto shadow-inner">
                    <object
                        data="/assets/instruction.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    ></object>
                </div>
                <div className="px-6 py-4 flex justify-between items-center bg-white rounded-b-xl h-[11vh] border-black border-t">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-md font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600"
                        onClick={handleDownload}
                    >
                        Download PDF
                    </button>
                    <button
                        className="px-4 py-2 rounded-md font-semibold shadow-lg transition-transform bg-[#6865C9] text-white hover:scale-105 hover:bg-[#5754b3]"
                        onClick={handleContinue}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div >
    );
}