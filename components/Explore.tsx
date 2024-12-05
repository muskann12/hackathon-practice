import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

// Load Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Explore = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[80px]">
      {/* Explore Heading */}
      <div className="w-full text-center">
        <h2 className={`font-bold text-[48px] leading-[57.6px] text-black ${roboto.className}`}>
          Explore Courses By Category
        </h2>
        
        {/* Adjusted paragraph positioning */}
        <p className={`text-[18px] leading-[27px] mt-[20px] ${roboto.className}`}>
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>
      
      {/* Gray Boxes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[80px]">
        {/* Box 1 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img1.png" alt="Icon" width={25.95} height={16.23} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Design & Development</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img2.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Marketing</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img3.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Finance & Accounting</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img4.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Business Management</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img5.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Software Engineering</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img6.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Data Science</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 7 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img7.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Photography</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 8 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img8.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Music</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-black">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 9 */}
        <div className="w-full h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-between">
          <div className="w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
            <Image src="/images/img9.png" alt="Icon" width={32} height={32} />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <p className="font-roboto font-semibold text-[20px] leading-[30px] text-black">Health & Fitness</p>
            <p className="font-roboto font-normal text-[18px] leading-[27px] text-gray">50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 text-black border-2 border-black rounded-md transition-colors hover:bg-gray-500 hover:text-white">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Explore;
