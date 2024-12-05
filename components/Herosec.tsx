import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

//  Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Herosec = () => {
  return (
    <div className={`w-full h-[800px] top-[141px]   md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 items-center ${roboto.className}`}>
      <div className='w-[640px] h-[300px] pr-[60px] pl-[80px] gap-[24px]'>
        <div className='h-[134px] w-[500px]'>
          <h1 className='text-6xl leading-[67.2px] text-black font-bold'>
            Learn new skills online with ease
          </h1>
        </div>
        <br />
        <div className='w-[500px] h-[54px] text-xl'>
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </div>

        {/* Buttons Section */}
        <div className='mt-8 flex gap-4'>
          {/* Primary Button */}
          <button className='w-[178px] h-[48px] border bg-black border-black rounded-[5px] px-[24px] py-[12px] text-white'>
            Explore Courses
          </button>

          {/* Secondary Button */}
          <button className='w-[164px] h-[48px] border border-black rounded-[5px] px-[24px] py-[12px] whitespace-nowrap text-center flex items-center justify-center'>
            Start Learning Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[640px] h-full flex justify-center items-center overflow-hidden top-4">
        <Image
          src="/images/girl.png"
          alt="Hero Section Image"
          width={640}
          height={900}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Herosec;
