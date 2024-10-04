"use client";
import React from "react";

const AssetsAndLiabilitiesPage = () => {
    return (
        <main className="custom-round2 min-h-screen flex justify-center">
            {/* Outer Div with padding */}
            <div
                className="bg-gradient-to-b from-white to-[rgba(198,196,255,0.5)] border-l border-r h-[93vh] w-[90vw] border-black shadow-lg mt-10"
            >
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
                        className="px-4 py-2 text-left rounded-md mr-20"
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
                            className="px-2 py-3 rounded-lg mr-10"
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
                    </div>
                </div>

                {/* Div-based Table Section */}
                <div className="flex flex-col items-center mt-12 justify-center mb-20">
                    <div className="grid grid-cols-2 gap-0 border border-black rounded-lg w-[90vh] bg-gradient-to-l from-white to-[rgba(198,196,255,0.5)] shadow-md overflow-hidden">
                        {/* Row 1 */}
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}>Current Value Of Bond</div>
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}></div>

                        {/* Row 2 */}
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}>Loan Amount</div>
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}></div>

                        {/* Row 3 */}
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}>Interest Payable</div>
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}></div>

                        {/* Row 4 */}
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}>Yield Received</div>
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}></div>

                        {/* Row 5 */}
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}>Debt Score</div>
                        <div className="border border-black px-4 py-4" style={{ fontFamily: "Gotham Black" }}></div>
                    </div>

                    {/* Buttons and Note Section */}
                    
                        <div className="mt-10 flex space-x-20 justify-between items-center">
                            <button
                                className="bg-gray-300 py-3 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-500 rounded shadow transition-transform duration-300 transform hover:scale-105 hover:brightness-110"
                            >
                                Continue
                            </button>
                            <div>
                                <button
                                    className="py-3 text-white font-semibold py-2 px-4 border rounded shadow transition-transform duration-300 transform hover:scale-105 hover:brightness-110"
                                    style={{
                                        fontFamily: "Gotham Black",
                                        background: "rgba(128, 125, 252, 1)",
                                    }}
                                >
                                    APPLY LOAN
                                </button>
                                <div
                                    className="text-gray-600 text-[9px] font:medium " 
                                    style={{ maxWidth: "fit-content" }} // Keeps note within button's width
                                >
                                    <strong>NOTE:</strong> This is an optional feature.
                                </div>
                            </div>
                        </div>

                        {/* Note Below APPLY LOAN Button */}
                    </div>
                </div>
            
        </main>
    );
};

export default AssetsAndLiabilitiesPage;
