'use client'
import { useState, useEffect } from "react";

const UpgradeAndVenture = () => {
    // Initial time set to 30 minutes (1800 seconds) or get from local storage
    const initialTime = parseInt(localStorage.getItem("timer")) || 30 * 60;
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        // Save the timer to local storage whenever it changes
        localStorage.setItem("timer", time);

        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval
        } else {
            // Clear the timer from local storage if it reaches zero
            localStorage.removeItem("timer");
        }
    }, [time]);

    // Convert seconds to MM:SS format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const upgradeVals = [
        { "Capital Restructuring": "In the context of our game D/E ratio simplg refers to Debt / Equity . Higher Ratio ie. More than 1 indicates that the company in acquired more debt" },
        { "Campaigning": "Campaign in general refers to Marketing , Branding and Sales Promotion . This Results in increasing impressions and footfall of the company." },
        { "Expansion and Innovation": " Expansion and Innovation ensures  'Econmies of Scale' with efficient and feasible technology, thus increasing profitability." }
    ];

    const ventureVals = [
        { "very high risk": ["val 1", "val 2"] },
        { "high risk": ["val 1", "val 2"] },
        { "average risk": ["val 1", "val 2"] },
        { "low risk": ["val 1", "val 2"] },
        { "very low risk": ["val 1", "val 2"] },
    ];

    return (
        <main className="w-[100vw] h-[100vh] custom-round2 bg-cover bg-no-repeat flex flex-col justify-center items-center">
            <nav className="h-[10vh] border bg-gradient-to-b rounded-3xl from-[#807DFC] to-[#461a99] border-white border-10px outline-black w-[81vw] relative top-10 z-10 shadow-xl flex justify-around items-center ">
                <div className="text-3xl font-gotham text-white">TEAM NAME</div>
                {/* Display the countdown timer in MM:SS format */}
                <div className="fit-content text-3xl font-gotham text-white">
                    {formatTime(time)}
                </div>
                <div className='flex gap-5'>
                    <button className="font-gotham bg-gradient-to-b from-[#FFE55B] to-[#FFBE5C] rounded-xl w-[10vw] text-[#603B10]">Wallet:$$$</button>
                    <div className="w-[3vw] h-[3vw] bg-gradient-to-b from-[#FFE55B] to-[#FFBE5C] rounded-[50%]">
                        <div className="w-[3vw] h-[3vw] rounded-[50%] border border-black custom-profilelogo"></div>
                    </div>
                </div>
            </nav>

            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#DAD0FF] to-[#FFFFFF] rounded-2xl w-[80vw] h-[80vh] flex flex-col gap-10 border border-black border-10px overflow-y-auto overflow-x-hidden custom-scrollbar">
                <div className="pt-16 border-5px w-full h-[80vh] rounded-2xl flex flex-col gap-12 justify-evenly items-center">
                    {/* Flex container for the first two sections */}
                    <div className="flex flex-row justify-between w-[inherit] ">
                        <div className="flex flex-col gap-5 w-[inherit]">
                            <h1 className="text-2xl text-center font-gotham text-[#363636]">UPGRADES</h1>
                            <div className="flex flex-col gap-10 w-[inherit]">
                                <div className="flex justify-around items-center ">
                                    {upgradeVals.slice(0, 2).map((item, index) => {
                                        const heading = Object.keys(item)[0];
                                        const details = item[heading];

                                        return (
                                            <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                                <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                    <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{heading}</h2>
                                                    <p className="font-mono text-white text-sm text-center h-[12vh] pt-2">{details}</p>
                                                    <button className="pb-1 rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out ">Buy Now</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center items-center">
                                    {upgradeVals.slice(2, 3).map((item, index) => {
                                        const heading = Object.keys(item)[0];
                                        const details = item[heading];

                                        return (
                                            <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                                <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                    <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{heading}</h2>
                                                    <p className="font-mono text-white text-sm text-center h-[12vh] pt-2">{details}</p>
                                                    <button className="rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out">Buy Now</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VENTURES Section */}
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl text-center font-gotham text-[#363636]">VENTURES</h1>
                        <div className="flex flex-col gap-4 w-full">
                            {ventureVals.map((items, index) => {
                                const risk = Object.keys(items)[0];
                                const opt1 = items[risk][0];
                                const opt2 = items[risk][1];

                                return (
                                    <div key={index} className="flex justify-around items-center gap-[10vw] w-full p-4 rounded-lg">
                                        <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                            <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none border border-black w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{risk}</h2>
                                                <p className="font-gotham text-white text-sm text-center h-[12vh] pt-2">{opt1}</p>
                                                <button className="rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out">Buy Now</button>
                                            </div>
                                        </div>
                                        <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                            <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none border border-black w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{risk}</h2>
                                                <p className="font-gotham text-white text-sm text-center h-[12vh] pt-2">{opt2}</p>
                                                <button className="rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UpgradeAndVenture;
