import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPreview = () => {
  return (
    <div className="lg:flex lg:flex-row lg:gap-[400px] md:flex md:flex-col ">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[24px]">
          <h3 className=" font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
            About us
          </h3>
          <p className="lg:max-w-[640px] md:w-[500px] font-OpenSans text-[16px] font-normal leading-[24px] tracking-[0.16px]">
            At SchoolSync, we are at the forefront of educational innovation,
            leading the charge in transforming the way schools and institutions
            manage their operations. Our mission is simple yet powerful: to
            bring{' '}
            <span className=" text-primary-400 font-medium">
              transparency, security, and efficiency
            </span>{' '}
            to the world of education by harnessing the potential of blockchain
            technology.
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <h3 className=" font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
            Our story
          </h3>
          <p className="lg:max-w-[640px] md:w-[500px] font-OpenSans text-[16px] font-normal leading-[24px] tracking-[0.16px]">
            The story of SchoolSync is one fueled by a passion for
            revolutionizing traditional systems and an unwavering commitment to
            improving the educational landscape...
          </p>
        </div>

        <Link
          href="/about"
          className=" flex lg:self-end md:self-start hover:scale-110 active:scale-105"
        >
          <p className=" font-OpenSans text-[16px] font-semibold text-secondary_text leading-[32px] tracking-[0.24px]">
            Read more
          </p>
        </Link>
      </div>
      <div className=" flex items-center md:mt-[5px]">
        <Image
          src="/images/Team image.png"
          alt="team"
          width={606}
          height={500}
          quality={95}
          className=" rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default AboutPreview;
