"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useActiveSectionContext } from "@/context/active-section-context";

type SignUpButtonProps = {
  text: string;
  background: string;
  fontStyle: string;
};

const SignUpButton = ({ text, background, fontStyle }: SignUpButtonProps) => {
  const router = useRouter();
  const { isButtonEnabled, isStudentClicked, isSchoolClicked, isStaffClicked } =
    useActiveSectionContext();

  const handleButtonClick = () => {
    if (isStaffClicked) {
      router.push("staff-signup");
    }

    if (isStudentClicked) {
      router.push("student-signup");
    }

    if (isSchoolClicked) {
      router.push("school-signup");
    }
  };
  return (
    <button
      className={`${background} hover:scale-110 active:scale-105 transition-all w-full py-[12px] px-[4px]  border-secondary_text rounded-[8px]`}
      onClick={handleButtonClick}
      disabled={!isButtonEnabled}
    >
      <p
        className={`text-[16px] font-OpenSans ${fontStyle} leading-[24px] tracking-[0.16px]`}
      >
        {text}
      </p>
    </button>
  );
};

export default SignUpButton;
