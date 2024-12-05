import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

// Load Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const TrustedSection = () => {
  return (
    <div className={`w-[1280px] mx-auto p-[64px] bg-[#F7F7F7] flex items-center justify-between ${roboto.className}`}>
      {/* Heading */}
      <div className="w-[320px]">
        <h5 className="font-bold text-[24px] leading-[33.6px]">
          Trusted by 2000+ companies worldwide.
        </h5>
      </div>

      {/* Logos */}
      <div className="absolute right-2 h-full flex items-center">
        <Image 
          src="/images/logos.png" 
          alt="Company Logos" 
          width={880} 
          height={56} 
          className="object-contain mr-[14px]"
        />
      </div>
    </div>
  );
};

export default TrustedSection;
