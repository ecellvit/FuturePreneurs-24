'use client'
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import logoImg from '@/assests/assests/fp_logo_new.png';
import clockImg from '@/assests/assests/clock_new.png';

export default function Timeline() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredDate, setHoveredDate] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnterDate = (date) => {
    setIsHovering(true);
    setHoveredDate(date);
  };

  const handleMouseLeaveDate = () => {
    setIsHovering(false);
    setHoveredDate(null);
  };
  
  

  return (
    <>
      <div className="hidden md:flex min-h-screen justify-center items-center bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-5 p-6 lg:max-w-[85%] md:max-w-[95%] relative">
          {/* Timeline Box (Excluded from effect) */}
          <div className="lg:col-span-3 md:col-span-2 bg-gradient-to-t from-purple-400 to-[#8055E0] rounded-2xl text-white p-5 flex flex-col justify-center items-center relative h-[18rem]">
            <h1 className="text-xl font-bold">Futurepreneurs 10.0</h1>
            <p className="text-6xl font-extrabold mt-1 mb-16">TIMELINE</p>
          </div>

          {/* First Row Middle Date Box */}
          <div 
            className="date-box col-span-1 bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start h-[18rem] relative"
            onMouseEnter={() => handleMouseEnterDate('08')}
            onMouseLeave={handleMouseLeaveDate}
          > 
            <h2 className="md:text-3xl sm:text-2xl lg:text-3xl font-gotham font-bold text-left">Qualifier Starts</h2>
            <div className="flex flex-col items-start mt-4">
              <p className={"date-number text-7xl font-extrabold font-anton leading none text-left " + (hoveredDate === '08' ? 'text-orange-400' : 'text-[#C1B7FC]')}
                        >08</p>
              <p className="text-3xl text-[#C1B7FC] font-gotham font-bold text-left" >OCT</p>
            </div>
            {/* Orange Border on Hover */}
            <div className={"hover-border absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '08' ? 'opacity-100' : 'opacity-0')} /> 
            {/* Number Circle */}
            
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center sm:bottom-4 sm:right-4">
              <span className="text-[#C1B7FC] text-2xl font-bold">3</span>
            </div>
          </div>

          {/* Second Row Middle Date Box (12 OCT) */}
          <div 
            className="date-box col-span-1 bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start h-[18rem] relative"
            onMouseEnter={() => handleMouseEnterDate('12')}
            onMouseLeave={handleMouseLeaveDate}
          > 
            <h2 className="md:text-3xl sm:text-2xl lg:3xl font-bold font-gotham text-left">Qualifier Closes</h2>
            <div className="flex flex-col items-start mt-4">
              <p className={"date-number font-anton text-7xl font-extrabold text-left " + (hoveredDate === '12' ? 'text-orange-400' : 'text-[#C1B7FC]')}>12</p>
              <p className="text-3xl text-[#C1B7FC] font-gotham font-bold text-left">OCT</p>
            </div>
            {/* Orange Border on Hover */}
            <div className={"hover-border absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '12' ? 'opacity-100' : 'opacity-0')} />
            {/* Number Circle */}
            
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center sm:bottom-4 sm:right-4">
              <span className="text-[#C1B7FC] text-2xl font-bold">4</span>
            </div>
          </div>

          {/* First Row Left Date Box */}
          <div 
            className="date-box col-span-1 bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start h-[18rem] relative"
            onMouseEnter={() => handleMouseEnterDate('02')}
            onMouseLeave={handleMouseLeaveDate}
          > 
            <div className="flex flex-col items-start mt-10">
              <p className={"date-number text-7xl font-anton font-extrabold text-left " + (hoveredDate === '02' ? 'text-orange-400' : 'text-[#C1B7FC]')}>02</p>
              <p className="text-3xl text-[#C1B7FC] font-bold font-gotham mb-5 text-left">OCT</p>
            </div>
            <h2 className="md:text-xl sm:text-xl lg:text-2xl font-bold font-gotham text-left">Registration Starts</h2>
            {/* Orange Border on Hover */}
            <div className={"hover-border absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '02' ? 'opacity-100' : 'opacity-0')} />
            {/* Number Circle */}
            <div className="absolute top-4 left-8 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center sm:top-4 sm:left-8">
              <span className="text-[#C1B7FC] text-2xl font-bold">1</span>
            </div>
          </div>

          {/* Second Row Left Date Box */}
          <div 
            className="date-box col-span-1 bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-end h-[18rem] relative"
            onMouseEnter={() => handleMouseEnterDate('06')}
            onMouseLeave={handleMouseLeaveDate}
          >
            <div className="flex flex-col items-end mt-10">
              <p className={"date-number text-7xl font-extrabold font-anton text-right " + (hoveredDate === '06' ? 'text-orange-400' : 'text-[#C1B7FC]')}>06</p>
              <p className="text-3xl text-[#C1B7FC] font-bold font-gotham mb-5 text-right">OCT</p>
            </div>
            <h2 className="lg:text-2xl sm:text-xl md:text-xl font-bold font-gotham text-right">Registration Closes</h2>
            {/* Orange Border on Hover */}
            <div className={"hover-border absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '06' ? 'opacity-100' : 'opacity-0')} />
            {/* Number Circle */}
            
            <div className="absolute top-4 right-8 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center sm:top-4 sm:right-8">
              <span className="text-[#C1B7FC] text-2xl font-bold">2</span>
            </div>
          </div>

          {/* D-Day Box (Ensure effect works here) */}
          <div 
            className="date-box lg:col-span-3 md:col-span-2 bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start h-[18rem] relative"
            onMouseEnter={() => handleMouseEnterDate('16')} 
            onMouseLeave={handleMouseLeaveDate}
          >
            <p className="text-3xl text-white font-bold font-gotham text-left">The</p>
            <h2 className="text-5xl font-extrabold font-gotham text-orange-400 text-left">D Day</h2>
            <p className="text-3xl text-white font-gotham font-bold text-left">Is Here</p>
            <div className="flex flex-col items-start mt-4">
              <p className={"date-number text-7xl font-extrabold font-anton text-left " + (hoveredDate === '16' ? 'text-orange-400' : 'text-[#C1B7FC]')}>16</p>
              <p className="text-3xl text-[#C1B7FC] font-gotham font-bold ">OCT</p>
            </div>
            <div className="absolute lg:top-10 md:top-14 lg:left-[15.3125rem] md:left-[11.3125rem] w-[40%]  max-w-[100%] h-[10.75rem] object-contain rounded-lg flex items-center justify-center">
              <img className="bg-transparent "src={clockImg.src}></img>
            </div>
            {/* Orange Border on Hover */}
            <div className={"hover-border absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '16' ? 'opacity-100' : 'opacity-0')} />
            {/* Number Circle */}
            <div className="absolute top-8 right-16 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center sm:top-8 sm:right-16">
              <span className="text-[#C1B7FC] text-2xl font-bold">5</span>
            </div>
          </div>

          {/* Logo Circle - Positioned over the Timeline and Date Cards */}
          <div
  className="absolute bg-black rounded-full border-[1rem] border-t-[1rem] border-b-[1rem] border-t-purple-300 border-b-white flex items-center justify-center text-white font-bold z-10
              w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 
              top-1/2 lg:left-[20%] md:left-[25%] translate-x-[-50%] translate-y-[-50%]"
>
  <img 
    src={logoImg.src} 
    className="object-contain max-w-full max-h-full md:w-20 md:h-20 lg:w-24 lg:h-24" 
    alt="logo"
  />
</div>

          {/* Torch-like Glow Effect (Following Cursor) */}
          {isHovering && (
            <div
              className="fixed w-40 h-40 rounded-full pointer-events-none z-50 transition-opacity duration-300 ease-in-out"
              style={{
                left: cursorPosition.x + "px",
                top: cursorPosition.y + "px",
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                animation: 'pulse 2s infinite',
                opacity: isHovering ? 1 : 0, 
              }}
            />
          )}
        </div>
      </div>
      {/* Layout for Small Devices */}
<div className="md:hidden flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
  {/* Timeline Box */}
  <div className="w-full bg-gradient-to-t from-purple-400 to-[#8055E0] rounded-2xl text-white p-5 flex flex-col justify-center items-center mb-4 h-[18rem]">
    <h1 className="text-xl font-bold">Futurepreneurs 10.0</h1>
    <p className="text-6xl font-extrabold mt-1 mb-16">TIMELINE</p>
  </div>

  {/* 2 OCT */}
  <div 
    className="w-full bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start mb-4 h-[18rem] relative"
    onMouseEnter={() => handleMouseEnterDate('02')}
    onMouseLeave={handleMouseLeaveDate}
  >
    <div className="flex flex-col items-start mt-10">
      <p className={"text-7xl font-extrabold text-left " + (hoveredDate === '02' ? 'text-orange-400' : 'text-[#C1B7FC]')}>02</p>
      <p className="text-3xl text-[#C1B7FC] font-bold mb-5">OCT</p>
    </div>
    <h2 className="text-2xl font-bold">Registration Starts</h2>
    <div className={"absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '02' ? 'opacity-100' : 'opacity-0')} />
    <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center">
      <span className="text-[#C1B7FC] text-2xl font-bold">1</span>
    </div>
  </div>

  {/* 6 OCT */}
  <div 
    className="w-full bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-end mb-4 h-[18rem] relative"
    onMouseEnter={() => handleMouseEnterDate('06')}
    onMouseLeave={handleMouseLeaveDate}
  >
    <div className="flex flex-col items-end mt-10">
      <p className={"text-7xl font-extrabold text-right " + (hoveredDate === '06' ? 'text-orange-400' : 'text-[#C1B7FC]')}>06</p>
      <p className="text-3xl text-[#C1B7FC] font-bold mb-5">OCT</p>
    </div>
    <h2 className="text-2xl font-bold text-right">Registration Closes</h2>
    <div className={"absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '06' ? 'opacity-100' : 'opacity-0')} />
    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center">
      <span className="text-[#C1B7FC] text-2xl font-bold">2</span>
    </div>
  </div>

  {/* 8 OCT */}
  <div 
    className="w-full bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start mb-4 h-[18rem] relative"
    onMouseEnter={() => handleMouseEnterDate('08')}
    onMouseLeave={handleMouseLeaveDate}
  >
    <h2 className="text-2xl font-bold">Qualifier Starts</h2>
    <div className="flex flex-col items-start mt-4">
      <p className={"text-7xl font-extrabold text-left " + (hoveredDate === '08' ? 'text-orange-400' : 'text-[#C1B7FC]')}>08</p>
      <p className="text-3xl text-[#C1B7FC] font-bold">OCT</p>
    </div>
    <div className={"absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '08' ? 'opacity-100' : 'opacity-0')} />
    <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center">
      <span className="text-[#C1B7FC] text-2xl font-bold">3</span>
    </div>
  </div>

  {/* 12 OCT */}
  <div 
    className="w-full bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start mb-4 h-[18rem] relative"
    onMouseEnter={() => handleMouseEnterDate('12')}
    onMouseLeave={handleMouseLeaveDate}
  >
    <h2 className="text-2xl font-bold">Qualifier Closes</h2>
    <div className="flex flex-col items-start mt-4">
      <p className={"text-7xl font-extrabold text-left " + (hoveredDate === '12' ? 'text-orange-400' : 'text-[#C1B7FC]')}>12</p>
      <p className="text-3xl text-[#C1B7FC] font-bold">OCT</p>
    </div>
    <div className={"absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '12' ? 'opacity-100' : 'opacity-0')} />
    <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center">
      <span className="text-[#C1B7FC] text-2xl font-bold">4</span>
    </div>
  </div>

  {/* D-Day Box */}
  <div 
    className="w-full bg-[#191934] rounded-2xl text-white p-6 flex flex-col items-start mb-4 h-[18rem] relative"
    onMouseEnter={() => handleMouseEnterDate('16')}
    onMouseLeave={handleMouseLeaveDate}
  >
    <p className="text-3xl font-bold">The</p>
    <h2 className="text-5xl font-extrabold text-orange-400">D Day</h2>
    <p className="text-3xl font-bold">Is Here</p>
    <div className="flex flex-col items-start mt-4">
      <p className={"text-7xl font-extrabold text-left " + (hoveredDate === '16' ? 'text-orange-400' : 'text-[#C1B7FC]')}>16</p>
      <p className="text-3xl text-[#C1B7FC] font-bold">OCT</p>
    </div>
    <div className={"absolute inset-0 border-4 border-orange-400 rounded-2xl " + (hoveredDate === '16' ? 'opacity-100' : 'opacity-0')} />
    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-tr from-[#563EEA] to-[#BBA5F4] rounded-full flex items-center justify-center">
      <span className="text-[#C1B7FC] text-2xl font-bold">5</span>
    </div>
  </div>
</div>
    </>
  );
}