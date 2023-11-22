'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useActiveSectionContext } from '@/context/active-section-context';
import { footerLinks1, footerLinks2, footerLinks3 } from '@/lib/data';

const Footer = () => {
  const { setIsFooterActive, setIsFooter2Active, setIsFooter3Active } =
    useActiveSectionContext();
  return (
    <footer className="flex flex-col items-center bg-primary-200 pb-[20px]">
      <section className=" flex flex-row justify-center items-center object-contain mt-7 bg-black/10 rounded-[12px] py-[50px] ">
        <div className="px-[60px] py-[67px] flex flex-row gap-5 ">
          <div className="flex flex-col gap-2">
            <h3 className=" font-semibold font-Inconsolata lg:text-[34px] md:text-[24px] text-white leading-[24px] tracking-[0.24px]">
              Join the SchoolSync Community
            </h3>
            <p className=" font-normal font-OpenSans lg:text-[16px] md:text-[14px] text-white tracking-[0.07px]">
              We invite you to join the SchoolSync community and embark on a
              journey <br className=" lg:hidden md:block" /> toward a smarter,
              more secure, and more efficient educational future.
            </p>
          </div>

          <div className=" flex flex-row lg:gap-[26px] md:gap-[5px]  px-[12px] font-OpenSans font-normal leading-[32px] tracking-[0.24px] lg:text-[16px] md:text-[12px] text-white  ">
            <p className=" hover:border hover:scale-110 hover:active-100  hover:border-white hover:rounded-[12px]  lg:px-12 md:px-8 lg:py-5 md:py-3 ">
              Get Started
            </p>
            <p className="hover:border hover:border-white hover:scale-110 hover:active-100 hover:rounded-[12px]  lg:px-12 md:px-8 lg:py-5 md:py-3">
              Contact Us
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-row items-center gap-[100px] mt-7">
        <div className="flex flex-col gap-[20px] border-t-2 border-black">
          {footerLinks1.map((link, index) => (
            <React.Fragment key={index}>
              <ul className="px-[12px] py-[4px] flex items-center">
                <Link
                  href={link.hash}
                  onClick={() => setIsFooterActive(link.name)}
                >
                  <p className=" lg:text-[24px] md:text-[18px] font-semibold font-Inconsolata leading-[36px] tracking-[0.24px] hover:scale-105 active:scale-100 hover:text-white hover:translate-x-1 transition-all">
                    {link.name}
                  </p>
                </Link>
              </ul>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-[20px] border-t-2 border-black">
          {footerLinks2.map((link, index) => (
            <React.Fragment key={index}>
              <ul className="px-[12px] py-[4px] flex items-center">
                <Link
                  href={link.hash}
                  onClick={() => setIsFooter2Active(link.name)}
                >
                  <p className=" lg:text-[24px] md:text-[18px] font-semibold font-Inconsolata leading-[36px] tracking-[0.24px] hover:scale-105 active:scale-100 hover:text-white hover:translate-x-1 transition-all">
                    {link.name}
                  </p>
                </Link>
              </ul>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-[20px] border-t-2 border-black">
          {footerLinks3.map((link, index) => (
            <React.Fragment key={index}>
              <ul className="px-[12px] py-[4px] flex items-center">
                <Link
                  href={link.hash}
                  onClick={() => setIsFooter3Active(link.name)}
                >
                  <p className=" lg:text-[24px] md:text-[18px] font-semibold font-Inconsolata leading-[36px] tracking-[0.24px] hover:scale-105 active:scale-100 hover:text-white hover:translate-x-1 transition-all">
                    {link.name}
                  </p>
                </Link>
              </ul>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="flex flex-row items-center py-[64px] ">
        <div className="flex flex-row gap-[20px] ">
          <Image
            src="/icons/IG.png"
            alt="instagram"
            width={40}
            height={40}
            quality={95}
            className="hover:scale-105 active:scale-100"
          />

          <Image
            src="/icons/Discord.png"
            alt="discord"
            width={40}
            height={40}
            quality={95}
            className="hover:scale-105 active:scale-100"
          />

          <Image
            src="/icons/twitter.png"
            alt="twitter"
            width={40}
            height={40}
            quality={95}
            className="hover:scale-105 active:scale-100"
          />
        </div>
      </section>

      <section className="  py-[54px] ">
        <div className="flex flex-row items-center gap-[8px]">
          <Image
            src="/icons/Vector.png"
            alt="copyright"
            width={20}
            height={20}
            quality={95}
          />
          <p className=" text-[14px] font-bold leading-[20px] tracking-[0.28px]">
            2023
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
