import React from 'react';
import Image from 'next/image';
import LearnMoreButton from './LearnMoreButton';

type FeatureCardProps = {
  img: string;
  title: string;
  description: string;
};

const FeatureCard = ({ img, title, description }: FeatureCardProps) => {
  return (
    <section className="flex flex-row gap-[32px] items-center mt-[49px]">
      <div>
        <Image
          src={img}
          alt="feature-1"
          width={140}
          height={140}
          quality={95}
        />
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col gap-[13.1px]">
          <h1 className=" font-Inconsolata text-[32px] font-semibold leading-[36px] tracking-[0.32px]">
            {title}
          </h1>
          <p className=" max-w-[520px] flex-wrap font-OpenSans text-[16px] font-normal leading-[24px] tracking-[0.16px] text-primary_text">
            {description}
          </p>

          <div className="mt-[8px]">
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
