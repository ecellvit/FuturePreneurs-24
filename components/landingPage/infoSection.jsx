'use client';

import React from 'react';
import Image from 'next/image';
import logoFP from '@/assests/assests/fp logo _ about us(4X).png';

export default function InfoSection() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-10 md:p-20 font-sans relative">
      <div className="flex-grow flex flex-col justify-center items-center text-center mb-8">
        <h2 className="text-xl md:text-4xl mb-2 text-gray-700">THE ULTIMATE</h2>
        <h1 className="text-3xl md:text-7xl font-bold mb-6 text-black">Business Simulation Game</h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center max-w-8xl mx-auto flex-grow px-4 md:px-8">

        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image src={logoFP} alt="FuturePreneurs Logo" width={500} height={570}  className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
          <p className="text-lg md:text-2xl mb-6 text-gray-700 pb-7 md:pb-0 text-justify">
          Propelled by the passion and hard work of E-Cell, VIT, we are elated to bring you the 10<sup>th</sup> edition of Futurepreneurs, the flagship event of E-Cell, VIT, which reflects its dedication to promoting innovation and entrepreneurship. This event is designed to offer to all contestants a hands-on experience with business simulations. Participants will face challenging scenarios designed to test their management and decision-making abilities.

          </p>
          <p className="text-lg md:text-2xl mb-6 text-gray-700 pb-7 md:pb-0 text-justify">
          Every contestant is bound to leave the event better equipped to tackle real-world problems and make informed business decisions in the future. Futurepreneurs 10.0 promises to be an engaging, enriching, captivating, and rewarding experience for all those involved.

          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="marquee-container overflow-hidden bg-white absolute bottom-0 left-0 w-full border-t border-b border-black border-25px z-40">
        <div className="marquee text-black text-lg md:text-2xl font-bold py-4">
          <div className="marquee-content">
            {/* Duplicating enough to ensure no gap */}
            <p>FUTUREPRENEURS 10.0 • WE BREED BUSINESS • FUTUREPRENEURS 10.0 • WE BREED BUSINESS • FUTUREPRENEURS 10.0 • WE BREED BUSINESS • FUTUREPRENEURS 10.0 • WE BREED BUSINESS •</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          height: 80px; 
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .marquee {
          display: flex;
          white-space: nowrap;
        }
        .marquee-content {
          display: flex;
          animation: marquee 75s linear infinite;
        }
        .marquee-content span {
          padding-right: 50px;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
