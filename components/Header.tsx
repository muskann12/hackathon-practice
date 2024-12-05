"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Roboto } from "next/font/google";

const fontRoboto = Roboto({ subsets: ['latin'], weight: "500" });

const Header = () => {
  return (
    <div className="hidden md:flex  bg-[#F7F7F7] w-[1280px] mx-auto top-[100px] left-[100px]">
      <header className="w-full h-[54px] pr-[64px] pl-[62px] bg-[#F7F7F7] shadow-[0px_-2px_0px_0px_#000000_inset] ">
        <div className="h-[30px] gap-[16px] pt-4">
          <p className="w-full h-[21px] text-[14px] leading-[21px]">
            Phone Number: 956 742 455 678
            <span className="border border-t-4 border-[#676767] w-[30px] mx-[7px]"></span>
            Email: info@ddsgnr.com
          </p>
          {/* Horizontal Line */}
          

        </div>

        {/* Social Icons */}
        <div className="flex gap-[16px] items-center justify-end mt-[-15px]">
  <FaFacebookF className="w-[24px] h-[24px]" />
  <FaInstagram className="w-[24px] h-[24px]" />
  <FaTwitter className="w-[24px] h-[24px]" />
  <FaLinkedin className="w-[24px] h-[24px]" />
</div>

      </header>
    </div>
  );
}

export default Header;
