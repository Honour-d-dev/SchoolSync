import React from 'react';
import Image from 'next/image';
import SignUpButton from '@/components/SignUpButton';

const Page = () => {
  return (
    <section className="flex flex-col padding bg-signUp bg-contain bg-center h-screen">
      <div className="flex self-end flex-col w-[540px] h-[645px] rounded-[12px] signUpCard  ">
        <div className="flex flex-row  items-center  gap-2">
          <Image src="/icons/logo.png" alt="logo" width={100} height={100} />
          <h1 className="text-[32px] font-Tomorrow font-semibold leading-[32px] tracking-[0.32px] text-[#1C364D]">
            SchoolSync
          </h1>
        </div>

        <div className="flex flex-col pl-[70px]">
          <h1 className="text-[36px] font-semibold font-Inconsolata leading-[36px] tracking-[0.36px] text-secondary_text">
            Sign Up
          </h1>
          <p className="text-[12px] font-SpaceGrotesk font-normal leading-[18px] tracking-[0.4px] text-secondary_text">
            New to Payclick, create an account with few clicks
          </p>

          <div className="flex flex-col gap-[36px] mt-[40px]">
            <SignUpButton
              text="School Staff"
              background=" bg-white"
              fontStyle="font-normal"
            />
            <SignUpButton
              text="Student"
              background=" bg-white"
              fontStyle="font-normal"
            />
            <SignUpButton
              text="School Admin"
              background=" bg-white"
              fontStyle="font-normal"
            />

            <div className="mt-[60px]">
              <SignUpButton
                text="Next Step"
                background=" bg-[#6695D8]"
                fontStyle="font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
