import React from 'react';

type SignUpButtonProps = {
  text: string;
  background: string;
  fontStyle: string;
};

const SignUpButton = ({ text, background, fontStyle }: SignUpButtonProps) => {
  return (
    <button
      className={`${background} hover:scale-110 active:scale-105 transition-all w-[400px] py-[12px] px-[4px]  border-secondary_text rounded-[8px]`}
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
