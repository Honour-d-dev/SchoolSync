import React from "react";
import Image from "next/image";
import { stars } from "@/lib/data";

const ReviewCard = () => {
  return (
    <div className=" flex flex-col lg:w-[1236px] md:w-[1000px] h-fit bg-gray-200 rounded-[40px] p-8 bg-white/25">
      <h1 className=" text-[24px] font-Inconsolata font-semibold leading-[36px] tracking-[0.24px] mt-[20px]">
        Our Users Reviews
      </h1>

      <div className="flex flex-row gap-10 md:gap-[80px] mt-10 items-start">
        <Image
          src="/images/Registrar.png"
          alt="review"
          width={360}
          height={240}
          quality={95}
          className="rounded-3xl h-[240px] w-[360px]"
        />

        <div className="flex flex-col">
          <h3 className="text-[24px] font-Inconsolata font-semibold leading-[36px] tracking-[0.24px]">
            Dr Adenike Awolowo Phd
          </h3>
          <p className="text-[14px] font-OpenSans font-medium tracking-[0.07px]">
            School Registrar
          </p>

          <div className="flex flex-row gap-[12px] mt-[20px]">
            {stars.map((star) => (
              <React.Fragment key={star.name}>
                <Image src={star.img} alt={star.name} width={24} height={24} />
              </React.Fragment>
            ))}
          </div>

          <p className="text-[16px] mt-[20px] font-normal tracking-[0.16px] font-OpenSans">
            SchoolSync has transformed the way we manage our school's
            operations. The level of transparency and security it offers is
            unparalleled. With our student records now securely stored on the
            blockchain, we have complete peace of mind. Administrative processes
            that used to be a hassle are now effortless, thanks to the system's
            automation. SchoolSync is a game-changer, and I can't recommend it
            enough!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
