'use client';

import React from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import Image from 'next/image';
import { links } from '@/lib/data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { isActive, setIsActive } = useActiveSectionContext();

  return (
    <nav className="flex flex-row lg:gap-[750px] md:gap-[100px]  bg-primary-100 padding-x gap">
      <div className="flex flex-col gap-1 items-center p-2">
        <Image
          src="/icons/logo.png"
          alt="logo"
          width={80}
          height={80}
          quality={95}
        />
        <p className=" text-[16px] text-[#1C364D] font-OpenSans font-semibold">
          SchoolSync
        </p>
      </div>

      <div className="flex flex-row lg:gap-[40px] md:gap-[20px] items-center mt-[50px] ">
        {links.map((link) => (
          <React.Fragment key={link.name}>
            <ul className=" font-Inconsolata text-[16px] font-semibold leading-[32px] tracking-[0.16px] group">
              <Link href={link.hash} onClick={() => setIsActive(link.name)}>
                {' '}
                <p
                  className={cn(
                    isActive === link.name
                      ? 'text-accent-400 font-semibold'
                      : 'text-black',
                    'group-hover:text-accent-400'
                  )}
                >
                  {link.name}
                </p>
              </Link>
            </ul>
          </React.Fragment>
        ))}

        <div className=" lg:ml-[150px] md:ml-[50px]">
          <button
            className=" bg-accent-400 rounded-[12px] shadow-md shadow-black
           px-8 py-3 font-OpenSans text-[16px] leading-[32px] tracking-[0.24px] font-medium group hover:scale-110 active:scale-100 transition-all"
          >
            <p className=" capitalize group-hover:scale-110 transition-all">
              get started
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;