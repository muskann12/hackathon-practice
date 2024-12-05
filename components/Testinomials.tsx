import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons
import Image from "next/image";

import team3 from "../public/images/t3.png";
import team1 from "../public/images/t1.png";
import team6 from "../public/images/t6.png";

// Import the Roboto font
import { Roboto } from 'next/font/google';

// Create a constant for the Roboto font
const roboto = Roboto({
  weight: ['400', '500', '700'], // Font weights you want
  subsets: ['latin'],
});

const CustomerTestimonial: React.FC = () => {
  const testimonials = [
    {
      image: team3,
      name: "Joseph Ngumbau",
      role: "Software Developer",
      testimonial:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'",
    },
    {
      image: team1,
      name: "Erick Kipkemboi",
      role: "Scrum Master",
      testimonial:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'",
    },
    {
      image: team6,
      name: "Stephen Kerubo",
      role: "UI/UX Designer",
      testimonial:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className={`${roboto.className} text-[36px] sm:text-[48px] font-bold text-[#000000] px-4 sm:px-8`}>
          Customer Testimonials
        </h2>
        <p className={`${roboto.className} text-[16px] sm:text-[20px] text-[#000000] mt-4 px-4 sm:px-8`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-10">
        {testimonials.map((customer, index) => (
          <div
            key={index}
            className="border border-black p-8 bg-white shadow-md"
            style={{
              width: '362.67px',
              height: 'auto',
              padding: '32px',
              gap: '24px',
            }}
          >
            <div className={`${roboto.className} flex mb-4 text-[20px] sm:text-[24px] text-black py-2`}>
              ★★★★★
            </div>
            <p className={`${roboto.className} text-[14px] sm:text-[16px] text-[#000000] mb-4`}>
              {customer.testimonial}
            </p>
            <div className="flex items-center gap-4 py-4">
              <Image
                src={customer.image}
                alt={customer.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className={`${roboto.className} text-[16px] sm:text-[18px] font-bold text-[#000000]`}>
                  {customer.name}
                </h3>
                <p className={`${roboto.className} text-[14px] sm:text-[16px] text-[#000000]`}>
                  {customer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-8 gap-8 px-4 sm:px-8 py-8">
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
