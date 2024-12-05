import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

// Replace weight `600` with `500` or `700`
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const teamMembers = [
  {
    image: '/images/t1.png',
    name: 'James Nduku',
    role: 'Marketing Coordinator',
  },
  {
    image: '/images/t2.png',
    name: 'Joseph Ngumbau ',
    role: 'Medical Assistant',
  },
  {
    image: '/images/t3.png',
    name: 'Joseph Munyambu',
    role: 'Nursing Assistant',
  },
  {
    image: '/images/t4.png',
    name: 'Erick Kipkemboi',
    role: 'Web Designer',
  },
  {
    image: '/images/t5.png',
    name: 'Stephen Kerubo',
    role: 'President of Sales',
  },
  {
    image: '/images/t6.png',
    name: 'John Leboo',
    role: 'Dog Trainer',
  },
];

const Team = () => {
  return (
    <div className="w-[1280px] mx-auto h-auto pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[96px] bg-gray-100">
      <div className="text-center">
        <h2
          className={`text-[48px] font-[700] ${roboto.className}`}
          style={{ lineHeight: '57.6px' }}
        >
          Our team
        </h2>
        <br />
        <p
          className={`text-[18px] font-[400] ${roboto.className}`}
          style={{ lineHeight: '27px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[96px] mt-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-[394.67px] h-auto  p-6 flex flex-col items-center"
          >
            <div className="w-[80px] h-[80px] mb-[24px]">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className=""
              />
            </div>
            <h3
              className={`text-[20px] font-[500] ${roboto.className}`}
              style={{ lineHeight: '30px' }}
            >
              {member.name}
            </h3>
            <p
              className={`text-[18px] font-[400] ${roboto.className}`}
              style={{ lineHeight: '27px' }}
            >
              {member.role}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-black text-[24px]" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-black text-[24px]" />
              </a>
              <a href="#" aria-label="Website">
                <FaGlobe className="text-black text-[24px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
