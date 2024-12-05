// components/Achievements.js
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Achievements() {
  return (
    <div className={`w-[1280px] leading-[57.6px] h-[488px] mx-auto pt-[112px] pr-[64px] pb-[112px]  pl-[64px] text-center  ${roboto.className}`}>
      <h1 className="text-black text-[70px] font-bold leading-[57.6px]">
    
        Achievements
      </h1>
      <br />
      
      <p className={`text-[18px] text-[#000000] mt-4 leading-[27px] ${roboto.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          

           <div className="flex flex-col lg:flex-row justify-between gap-[24px] mt-2">
            <div className="flex flex-col items-center gap-8">
              <span className="text-[40px] font-bold text-[#000000]">+200</span>
              <span className="text-[16px] text-[#000000] leading-[24px] ml-2">Courses</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <span className="text-[40px] font-bold text-[#000000]">50K</span>
              <span className="text-[16px] text-[#000000]  leading-[24px] ml-2">Mentors</span>
            </div>
            <div className="flex flex-col items-center gap-8 ">
              <span className="text-[40px] font-bold  text-[#000000]">370k</span>
              <span className="text-[16px] text-[#000000]  leading-[24px] ml-2">Students</span>
            </div>
            <div className="flex flex-col items-center gap-8 ">
              <span className="text-[40px] font-bold text-[#000000]">100+</span>
              <span className="text-[16px] text-[#000000] leading-[24px]">Recognition</span>
            </div>
          </div>
    </div>
  );
}
