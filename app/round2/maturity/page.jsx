"use client";
import React from "react";

const MaturityPage = () => {
    return (
        <main className="custom-round2 min-h-screen flex justify-center">
            {/* Outer Div with padding */}
            <div
                className="bg-gradient-to-b from-white to-[rgba(198,196,255,0.5)] border-l border-r h-[93vh] w-[90vw] border-black shadow-lg mt-10">

                {/* Navbar with custom gradient */}
                <div
                    className="flex justify-between items-center text-white py-0.5 px-1 rounded-lg scale-[1.02]"
                    style={{
                        background: "linear-gradient(191.04deg, #807DFC -102.49%, #12031F 345.39%)",
                        border: "2.29px solid",
                        borderImageSource:
                            "linear-gradient(91.28deg, #FFFFFF 3.21%, rgba(255, 255, 255, 0) 11.36%), linear-gradient(94.87deg, rgba(255, 255, 255, 0) 69.06%, #FFFFFF 84.86%)",
                        backdropFilter: "blur(1.5px)",
                        boxShadow: "0px 2.58px 5.16px 0px #00000040, 0px 1.76px 0px 0px #00000040",
                    }}
                >
                    {/* TEAM NAME with custom styles */}
                    <div
                        className="px-10"
                        style={{
                            fontFamily: "Gotham Black",
                            fontSize: "30px",
                            fontWeight: 500,
                            lineHeight: "55.25px",
                            color: "rgba(255, 255, 255, 1)", // White text color
                        }}
                    >
                        TEAM NAME
                    </div>

                    {/* Timer with custom styles */}
                    <div
                        className="px-4 py-2 text-left rounded-md"
                        style={{
                            fontFamily: "Gotham Black",
                            fontSize: "30px",
                            fontWeight: 500,
                            lineHeight: "55.25px",
                            color: "rgba(255, 255, 255, 1)", // White text color
                        }}
                    >
                        15:00
                    </div>

                    <div className="flex items-center">
                        <div
                            className="px-2 py-3 rounded-lg"
                            style={{
                                fontFamily: "Gotham Black",
                                fontSize: "16px", // Reduced font size for wallet
                                fontWeight: 500,
                                lineHeight: "20px", // Adjusted line height
                                color: "rgba(96, 59, 16, 1)", // Text color for wallet
                                background: "linear-gradient(180deg, #FFE55B 0%, #FFBE5C 100%)", // Gradient background for wallet
                                paddingRight: "10px", // Added padding for better spacing
                            }}
                        >
                            WALLET-$$$$
                        </div>
                        <div className="ml-10 mr-10 w-[3.5vw] h-[3.5vw] bg-gradient-to-b from-[#FFE55B] to-[#FFBE5C] rounded-[50%]">
                            <div className="w-[3.5vw] h-[3.5vw] rounded-[50%] border border-[#FFE55B]  custom-profilelogo">

                            </div>
                        </div>

                    </div>
                </div>

                {/* Main Content */}
                <div className="flex justify-between items-start p-8 space-x-8">
                    {/* Left Section */}
                    <div className="w-1/2 mt-10">
                        <h2 className="text-3xl font-bold mb-6"
                            style={{
                                fontFamily: "Gotham Black",
                                color: "rgba(54, 54, 54, 1)",

                            }}
                        >DEBT RESTRUCTURING</h2>
                        <div className="flex flex-col space-y-8">
                            {/* Button 1: High Debt Payoff */}
                            <button
                                className="font-semibold text-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    fontFamily: "Gotham Black",
                                    width: "260px",
                                    height: "50px",
                                    backgroundColor: "rgba(198, 196, 255, 1)", // Button background color
                                    position: "relative", // Required for border and pseudo elements
                                    border: "3px solid transparent", // Solid transparent border for showing gradient
                                    //backgroundClip: "padding-box", // Ensures background color only applies to padding box
                                    borderImage: "linear-gradient(to right, rgba(198, 196, 255, 1), rgba(255, 255, 255, 1)) 1", // Gradient border
                                    borderRadius: "10px", // Optional, for rounded corners
                                }}
                                onClick={() => alert('Button clicked!')}
                            >
                                HIGH DEBT PAYOFF
                            </button>


                            {/* Button 2: Partial High Debt Payoff */}
                            <button
                                className="font-semibold text-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    fontFamily: "Gotham Black",
                                    width: "260px",
                                    height: "50px",
                                    backgroundColor: "rgba(198, 196, 255, 1)", // Button background color
                                    position: "relative", // Required for border and pseudo elements
                                    border: "3px solid transparent", // Solid transparent border for showing gradient
                                    //backgroundClip: "padding-box", // Ensures background color only applies to padding box
                                    borderImage: "linear-gradient(to right, rgba(198, 196, 255, 1), rgba(255, 255, 255, 1)) 1", // Gradient border
                                    borderRadius: "10px", // Optional, for rounded corners
                                }}
                                onClick={() => alert('Button clicked!')}
                            >
                                PARTIAL HIGH DEBT PAYOFF
                            </button>

                            {/* Button 3: Low Debt Payoff */}
                            <button
                                className="font-semibold text-indigo-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    fontFamily: "Gotham Black",
                                    width: "260px",
                                    height: "50px",
                                    backgroundColor: "rgba(198, 196, 255, 1)", // Button background color
                                    position: "relative", // Required for border and pseudo elements
                                    border: "3px solid transparent", // Solid transparent border for showing gradient
                                    //backgroundClip: "padding-box", // Ensures background color only applies to padding box
                                    borderImage: "linear-gradient(to right, rgba(198, 196, 255, 1), rgba(255, 255, 255, 1)) 1", // Gradient border
                                    borderRadius: "10px", // Optional, for rounded corners
                                }}
                                onClick={() => alert('Button clicked!')}
                            >
                                LOW DEBT PAYOFF
                            </button>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col mt-3 w-1/3 bg-gray-100 rounded-lg p-6 justify-between items-center bg-gradient-to-bl border-2 border-white-100 from-white to-[rgba(198,196,255,0.8)] h-[400px] w-[300px]">
                        <h2 className="text-2xl font-bold text-gray-600 self-center">Maturity</h2>
                        <div className="w-full flex justify-center">
                            <button
                                className="text-white text-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    fontFamily: "Gotham Black",
                                    backgroundColor: "rgba(84, 76, 162, 1)" // Custom background color
                                }}
                            >
                                MATURE
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default MaturityPage;
