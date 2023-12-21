"use client";

import { Loader } from "lucide-react";
import React from "react";

type buttonTextProps = {
  buttonText: string;
  pending?: boolean;
};

const NextStepBtn = ({ buttonText, pending }: buttonTextProps) => {
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex flex-col shadow-md items-center w-full bg-primary-200 py-[12px] px-[48px] rounded-[12px] hover:scale-110 active:scale-105 transition-all"
    >
      {pending ? (
        <div className="h-full animate-spin rounded-full border-b-2 border-white">
          <Loader className="h-full w-full" />
        </div>
      ) : (
        <p className=" font-OpenSans text-[16px] font-semibold leading-[32px] tracking-[0.24px]">
          {buttonText}
        </p>
      )}
    </button>
  );
};

export default NextStepBtn;
