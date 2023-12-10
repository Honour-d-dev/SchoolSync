"use client";

import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "./button";

const Navbar = () => {
  const { isActive, setIsActive } = useActiveSectionContext();

  return (
    <nav className="flex flex-col md:flex-row md:justify-between gap-4  bg-primary-100 w-full px-4 lg:px-8">
      <Link href="/" className="flex flex-col gap-1 items-center p-2">
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
      </Link>

      <div className="flex flex-row lg:gap-[40px] md:gap-[20px] items-center md:mt-[50px] gap-2 justify-evenly">
        {links.map((link) => (
          <React.Fragment key={link.name}>
            <ul className=" font-Inconsolata text-[16px] font-semibold leading-[32px] tracking-[0.16px] group scroll-smooth whitespace-nowrap">
              <Link
                href={link.hash}
                onClick={() => setIsActive(link.name)}
                className="scroll-smooth transition-all"
              >
                {" "}
                <p
                  className={cn(
                    isActive === link.name
                      ? "text-accent-400 font-semibold"
                      : "text-black",
                    "group-hover:text-accent-400"
                  )}
                >
                  {link.name}
                </p>
              </Link>
            </ul>
          </React.Fragment>
        ))}

        <div className=" whitespace-nowrap hidden md:block">
          <Button
            linkTo="/get-started"
            buttonText="Get Started"
            backgroundColor=" bg-accent-400"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
