'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const UpgradeConfirm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();

    const handleCheckboxClick = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };

    const handleContinueClick = async () => {
        if (isChecked) {
            try {
                // Temporarily remove handler for debugging
                const result = await handler(); 
                alert('Proceeding with the upgrade...');

                // Handle the result, and redirect or perform other actions as needed
                console.log('Handler result:', result);
                router.push('/upgrade-success'); 
            } catch (error) {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            }
        } else {
            alert('Please agree to the terms and conditions first.');
        }
    };

    const handleGoBackClick = () => {
        router.back(); // Go back to the previous page
    };

    return (
        <main className="w-[100vw] h-[100vh] bg-[#0000008b] flex justify-center items-center">
            <div className="w-[60vw] h-[60vh] bg-white rounded-2xl">
                <div className="m-2 w-[59vw] h-[58vh] bg-[#7271DE] rounded-2xl flex-col justify-around">
                    <h1 className="pt-[8vh] pl-10 pb-2 text-[3vw] font-gotham text-white">Do You Want to Buy?</h1>
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="flex-col items-center justify-around">
                            <div className="flex flex-col gap-5 items-center">
                                <div className="bg-[#9D9FFF] w-[20vw] h-[15vh] rounded-xl"></div>
                                <div className="flex gap-5 items-center">
                                    {/* Checkbox */}
                                    <div
                                        className={`w-[1vw] h-[1vw] rounded-sm cursor-pointer ${isChecked ? 'bg-blue-500' : 'bg-[#0000008b]'}`}
                                        onClick={handleCheckboxClick}
                                    ></div>
                                    <p className="font-mono text-white text-sm">I Agree to all Terms and Conditions</p>
                                </div>
                                <div className="mr-[5vw] flex flex-col gap-5">
                                    <button
                                        className="w-[10vw] h-[5vh] bg-[#FFD05B] rounded-xl font-gotham"
                                        onClick={handleContinueClick}
                                    >
                                        Continue
                                    </button>
                                    <button
                                        className="bg-white w-[10vw] h-[5vh] rounded-xl font-gotham"
                                        onClick={handleGoBackClick}
                                    >
                                        Go Back
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="custom-fplogoround2 w-[15vw] h-[15vw] mr-5"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UpgradeConfirm;
