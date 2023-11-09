import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import { partners } from '@/lib/data';

const Page = () => {
  return (
    <section className=" flex flex-col min-h-screen">
      <div className="lg:flex lg:flex-row md:flex md:flex-col gap-1 padding ">
        <section className="flex flex-col gap-3">
          <h1 className="capitalize lg:max-w-[900px] md:text-[50px] lg:max-h-[470px] text-secondary_text font-bold lg:leading-[120px] lg:text-[80px] ">
            Unlock the Future of School Management with Blockchain Technology
          </h1>
          <h3 className=" capitalize lg:max-w-[500px] lg:max-h-[72px] lg:text-[16px] leading-[24px] tracking-[0.16px] font-OpenSans font-normal">
            Streamline Student Records, Enhance Security, and Simplify Processes
            on Our Innovative School Management System. Experience the Future
            Today!
          </h3>

          <div className="flex flex-row gap-x-[24px] mt-[40px] ">
            <Button buttonText="Get Started" backgroundColor="bg-accent-400" />

            <button className="flex flex-row items-center group hover:scale-110 active:scale-105 transition-all">
              <p className=" font-OpenSans text-[16px] font-normal text-secondary_text leading-[32px] tracking-[0.2px]  ">
                Learn More
              </p>
              <Image
                src="/icons/ArrowUp.png"
                alt="arrow_icon"
                width={50}
                height={50}
                className="group-hover:translate-x-1 group-hover:-translate-y-2 transition-all"
              />
            </button>
          </div>
        </section>

        {/**Cards Section */}
        <section className="flex flex-row md:mt-[10px] z-[999px]   ">
          <div className="object-contain lg:absolute lg:top-[470px] lg:left-[850px] ">
            <Image
              src="/images/hero_card1.png"
              alt="hero_card"
              width={356}
              height={500}
              quality={95}
              className="hover:scale-110 transition-all "
            />
          </div>
          <div className="object-contain lg:absolute lg:top-[130px] lg:left-[1200px] md:ml-[15px] md:mt-[100px] ">
            <Image
              src="/images/hero_card2.png"
              alt="hero_card2"
              width={356}
              height={500}
              quality={95}
              className="hover:scale-110 hover:translate-x-5 hover:-translate-y-2  transition-all "
            />
          </div>
        </section>
      </div>

      <section className=" flex flex-col w-full h-[160px] bg-primary-200 padding-x mt-[300px] ">
        <div className="flex mt-[20px]">
          <h3 className=" font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
            Partners
          </h3>
        </div>

        <div className="flex flex-row gap-[228px] self-center">
          {partners.map((partner) => (
            <React.Fragment key={partner.name}>
              <Image
                src={partner.img}
                alt={partner.name}
                width={144}
                height={72}
                quality={95}
              />
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="mt-3 padding">
        <h1 className=" font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
          Features
        </h1>
      </div>
    </section>
  );
};

export default Page;
