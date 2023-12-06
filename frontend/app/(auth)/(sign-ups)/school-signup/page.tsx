'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NextStepBtn from '@/components/NextStepBtn';

const Page = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };
  return (
    <section className=" flex flex-col padding bg-signUp bg-contain min-h-screen">
      <div className=" flex flex-col self-end w-[540px] h-auto rounded-[12px] signUpCard">
        <div className="flex flex-row  items-center  gap-2">
          <Link href="/">
            <Image src="/icons/logo.png" alt="logo" width={100} height={100} />
          </Link>
          <h1 className="text-[32px] font-Tomorrow font-semibold leading-[32px] tracking-[0.32px] text-[#1C364D]">
            SchoolSync
          </h1>
        </div>
        <div className="flex flex-col pl-[70px]">
          <h3 className=" text-secondary_text font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
            School Management Sign Up
          </h3>
          <p className="text-[12px] font-SpaceGrotesk font-normal leading-[18px] tracking-[0.4px] text-secondary_text">
            New to Payclick, create an account with few clicks
          </p>
        </div>

        <form className="mt-[40px] flex flex-col pl-[70px] gap-[36px]">
          <div className="flex flex-col gap-2">
            <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
              School Name
            </p>
            <input
              type="text"
              name="fullName"
              required
              className=" w-[358px] h-[48px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
              School Email Address
            </p>
            <input
              type="email"
              name="email"
              required
              className=" w-[358px] h-[48px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
            />
          </div>
          <div className="flex flex-col items-center gap-3 border w-[340px] h-auto py-15  border-secondary_text border-dashed rounded-[20px]">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-[100px] mt-7"
              />
            ) : (
              <p className="mt-9 text-[14px] font-OpenSans font-semibold leading-[20px] tracking-[0.28px]">
                Upload Image
              </p>
            )}
            <label htmlFor="imageButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.00002 7.16667C4.98669 7.16667 4.16669 6.34667 4.16669 5.33333C4.16669 4.32 4.98669 3.5 6.00002 3.5C7.01335 3.5 7.83335 4.32 7.83335 5.33333C7.83335 6.34667 7.01335 7.16667 6.00002 7.16667ZM6.00002 4.5C5.54002 4.5 5.16669 4.87333 5.16669 5.33333C5.16669 5.79333 5.54002 6.16667 6.00002 6.16667C6.46002 6.16667 6.83335 5.79333 6.83335 5.33333C6.83335 4.87333 6.46002 4.5 6.00002 4.5Z"
                  fill="#050200"
                />
                <path
                  d="M9.99998 15.1673H5.99998C2.37998 15.1673 0.833313 13.6207 0.833313 10.0007V6.00065C0.833313 2.38065 2.37998 0.833984 5.99998 0.833984H8.66665C8.93998 0.833984 9.16665 1.06065 9.16665 1.33398C9.16665 1.60732 8.93998 1.83398 8.66665 1.83398H5.99998C2.92665 1.83398 1.83331 2.92732 1.83331 6.00065V10.0007C1.83331 13.074 2.92665 14.1673 5.99998 14.1673H9.99998C13.0733 14.1673 14.1666 13.074 14.1666 10.0007V6.66732C14.1666 6.39398 14.3933 6.16732 14.6666 6.16732C14.94 6.16732 15.1666 6.39398 15.1666 6.66732V10.0007C15.1666 13.6207 13.62 15.1673 9.99998 15.1673Z"
                  fill="#050200"
                />
                <path
                  d="M12 5.83398C11.9333 5.83398 11.8733 5.82065 11.8067 5.79398C11.62 5.72065 11.5 5.53398 11.5 5.33398V1.33398C11.5 1.06065 11.7267 0.833984 12 0.833984C12.2733 0.833984 12.5 1.06065 12.5 1.33398V4.12732L12.98 3.64732C13.1733 3.45398 13.4933 3.45398 13.6867 3.64732C13.88 3.84065 13.88 4.16065 13.6867 4.35398L12.3533 5.68732C12.26 5.78065 12.1333 5.83398 12 5.83398Z"
                  fill="#050200"
                />
                <path
                  d="M12 5.83362C11.8733 5.83362 11.7467 5.78695 11.6467 5.68695L10.3133 4.35362C10.12 4.16029 10.12 3.84029 10.3133 3.64695C10.5067 3.45362 10.8267 3.45362 11.02 3.64695L12.3533 4.98029C12.5467 5.17362 12.5467 5.49362 12.3533 5.68695C12.2533 5.78695 12.1267 5.83362 12 5.83362Z"
                  fill="#050200"
                />
                <path
                  d="M1.77999 13.133C1.61999 13.133 1.45999 13.053 1.36666 12.913C1.21332 12.6864 1.27332 12.373 1.50666 12.2197L4.79332 10.013C5.51332 9.52638 6.50666 9.58638 7.15999 10.1397L7.37999 10.333C7.71332 10.6197 8.27999 10.6197 8.60666 10.333L11.38 7.95305C12.0867 7.34638 13.2 7.34638 13.9133 7.95305L15 8.88638C15.2067 9.06638 15.2333 9.37971 15.0533 9.59305C14.8733 9.79971 14.56 9.82638 14.3467 9.64638L13.26 8.71305C12.9267 8.42638 12.36 8.42638 12.0267 8.71305L9.25332 11.093C8.54666 11.6997 7.43332 11.6997 6.71999 11.093L6.49999 10.8997C6.19332 10.6397 5.68666 10.613 5.34666 10.8464L2.05999 13.053C1.97332 13.1064 1.87332 13.133 1.77999 13.133Z"
                  fill="#050200"
                />
              </svg>
            </label>
            <input
              type="file"
              name="image"
              accept=".png, .jpg, .jpeg, .svg"
              id="imageButton"
              placeholder="Upload image"
              required
              onChange={handleImageChange}
              className="w-[1px] opacity-0"
            />
          </div>

          <NextStepBtn buttonText="Next Step" />
        </form>
        <p className=" mt-2 self-center font-sans text-[14px] font-medium">
          {' '}
          Already have an account? Proceed to{' '}
          <span className="text-white">Connect Wallet</span>
        </p>
      </div>
    </section>
  );
};

export default Page;
