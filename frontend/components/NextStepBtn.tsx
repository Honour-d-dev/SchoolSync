'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

type buttonTextProps = {
  buttonText: string;
};

const NextStepBtn = ({ buttonText }: buttonTextProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex flex-col shadow-md items-center w-[358px] bg-primary-200 py-[14px] px-[48px] rounded-[12px] hover:scale-110 active:scale-105 transition-all"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <p className=" font-OpenSans text-[16px] font-semibold leading-[32px] tracking-[0.24px]">
          {buttonText}
        </p>
      )}
    </button>
  );
};

export default NextStepBtn;
