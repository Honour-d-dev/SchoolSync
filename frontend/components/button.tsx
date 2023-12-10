import React from "react";
import { useRouter } from "next/navigation";

type button = {
  buttonText: string;
  backgroundColor: string;
  linkTo: string;
};

const Button = ({ buttonText, backgroundColor, linkTo }: button) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(linkTo);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={` ${backgroundColor} rounded-[12px] shadow-md shadow-black
      lg:px-8 lg:py-3 md:px-3 md:py-4 p-2 font-OpenSans lg:text-[16px] md:text-[12px] leading-[32px] tracking-[0.24px] font-medium group hover:scale-110 active:scale-100 transition-all`}
    >
      <p className=" capitalize group-hover:scale-110 transition-all">
        {buttonText}
      </p>
    </button>
  );
};

export default Button;
