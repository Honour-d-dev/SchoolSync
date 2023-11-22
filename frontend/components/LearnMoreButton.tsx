import React from 'react';
import Image from 'next/image';

const LearnMoreButton = () => {
  return (
    <>
      <button className="flex flex-row items-center group hover:scale-110 active:scale-105 transition-all">
        <p className=" font-OpenSans text-[16px] font-normal text-secondary_text leading-[32px] tracking-[0.2px]  ">
          Learn More
        </p>
        <Image
          src="/icons/ArrowUp.png"
          alt="arrow_icon"
          width={50}
          height={50}
          className="group-hover:translate-x-1 group-hover:-translate-y-2 transition-all"
        />
      </button>
    </>
  );
};

export default LearnMoreButton;
