"use client";
import React from "react";
import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar: React.FC = () => {
  return (
    <div className={`py-5 ${interFont.className}`}>
      <div className="w-[1280px] h-[72px] bg-[#F7F7F7] hidden md:flex mx-auto items-center px-[70px] border-b border-[#000000]">
        {/* Logo Section */}
        <div className="flex items-center gap-[10.5px]">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[32.58px] h-[30.38px] object-contain"
          />
          <span className="w-[90px] h-[30px] leading-[30.34px] text-[25.7px] font-bold">
            Ddsgnr
          </span>
        </div>

        {/* Navigation Links and Buttons */}
        <div className="flex mx-auto h-[44px] gap-[32px] items-center bg-[#FFFFFF] ml-36">
          
          <a
            href="#"
            className="w-[64px] h-[44px] border-b border-black px-[10px] flex items-center justify-center"
          >
            Home
          </a>
          <a
            href="#"
            className="w-[59px] h-[24px] flex items-center justify-center"
          >
            Courses
          </a>
          <a
            href="#"
            className="w-[81px] h-[44px] px-[10px] flex items-center justify-center"
          >
            Services
          </a>
          <a
            href="#"
            className="w-[113px] h-[44px] px-[10px] flex items-center justify-center"
          >
            Achievements
          </a>
          <a
            href="#"
            className="h-[4px] px-[10px] flex items-center justify-center"
          >
            AboutUs
          </a>
          <a
            href="#"
            className="w-[104px] h-[44px] px-[10px] flex items-center justify-center"
          >
            Testimonial
          </a>

          {/* Buttons (Login and SignUp) */}
          <div className="flex gap-[16px] ml-auto">
            <button className="w-[80px] h-[40px] border border-black rounded-[5px] bg-white text-black px-[20px] py-[8px]">
              Login
            </button>
            <button className="w-[99px] h-[40px] border border-black rounded-[5px] bg-[#000] text-white px-[20px] py-[8px]">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
