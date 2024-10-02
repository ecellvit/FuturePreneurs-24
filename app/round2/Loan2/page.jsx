'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

const page = () => {
// Modal state
const [isModalOpen, setIsModalOpen] = useState(false);
const [loanAmount, setLoanAmount] = useState('');

// Handle modal open/close
const openModal = () => {
    setIsModalOpen(true);
};

const router = useRouter();
const handleContinue = () => {
    router.push("./page3")
};

const closeModal = () => {
    setIsModalOpen(false);
};

// Preventing back navigation
useEffect(() => {
    router.replace(router.asPath);
}, []);2027

    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

    const handleKeyDown = (event) => {
        if (event.keyCode === 123 || // F12
            (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
            (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
            (event.ctrlKey && event.keyCode === 85) || // Ctrl+U
            (event.ctrlKey && event.keyCode === 83)) { // Ctrl+S
            event.preventDefault();
        }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
    };
    }, []);

// Handle input validation (only digits)
const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
        setLoanAmount(value); // Allows only digits
    }
};

return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-200 via-white-200 to-purple-400">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Loan</h1>
        
        {/* Slabs */}
        <div className="bg-gray-100 p-2 rounded-md mb-4 text-sm text-center">
            Range: 2 Cr to 3 Cr
        </div>
        <div className="bg-gray-100 p-2 rounded-md mb-4 text-sm text-center">
            Range: 3.1 Cr to 4 Cr
        </div>
        <div className="bg-gray-100 p-2 rounded-md mb-4 text-sm text-center">
            Range: 4.1 Cr to 5 Cr
        </div>
        <div className="bg-gray-100 p-2 rounded-md mb-4 text-sm text-center">
            Range: 5.1 Cr and higher
        </div>

        {/* Loan Amount Input */}
        <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter the loan amount"
            value={loanAmount}
            onChange={handleInputChange}
        />

        {/* Take Loan Button */}
        <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            onClick={openModal}
        >
            Take Loan
        </button>
    </div>

    {/* Modal */}
    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-72 text-center">
            <p className="mb-4 text-lg">Are you sure you want to take a loan of {loanAmount} with an interest rate of 15%?</p>
            <div className="flex justify-around">
                <button
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                onClick={handleContinue}
                >
                    Yes
                </button>
                <button
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                onClick={closeModal}
                >
                    No
                </button>
            </div>
        </div>
        </div>
        )}
    </div>
    );
};

export default page;
