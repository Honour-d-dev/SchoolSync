"use client";

import React from "react";
import { motion } from "framer-motion";
import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";
import Button from "@/components/button";
import LearnMoreButton from "@/components/LearnMoreButton";
import FeatureCard from "@/components/FeatureCard";
import AboutPreview from "@/components/AboutPreview";
import ReviewCard from "@/components/ReviewCard";
import Faq from "@/components/Faq";
import { partners } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Page = () => {
  return (
    <motion.section
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="home"
      className=" flex flex-col"
    >
      <div className="lg:flex lg:flex-row md:flex md:flex-col gap-1 padding ">
        <section className="flex flex-col gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
            }}
            className="capitalize lg:max-w-[900px] md:text-[50px] lg:max-h-[470px] text-secondary_text font-bold lg:leading-[120px] lg:text-[80px] "
          >
            Unlock the Future of School Management with Blockchain Technology
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.85,
            }}
            className=" capitalize lg:max-w-[500px] lg:max-h-[72px] lg:text-[16px] leading-[24px] tracking-[0.16px] font-OpenSans font-normal"
          >
            Streamline Student Records, Enhance Security, and Simplify Processes
            on Our Innovative School Management System. Experience the Future
            Today!
          </motion.h3>

          <div className="flex flex-row gap-x-[24px] mt-[40px] ">
            <Button
              buttonText="Get Started"
              backgroundColor="bg-accent-400"
              linkTo="/get-started"
            />

            <LearnMoreButton />
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

      {/**Partners Section */}
      <section className=" flex flex-col w-full h-[160px] bg-primary-200 padding-x mt-[300px] ">
        <div className="flex mt-[20px]">
          <h3 className=" font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
            Partners
          </h3>
        </div>

        <div className="flex flex-row gap-[228px] self-center">
          {partners.map((partner, index) => (
            <MotionDiv
              key={partner.name}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.25,
                ease: "easeInOut",
                duration: 0.5,
              }}
              viewport={{ amount: 0.5, once: false }}
            >
              <Image
                src={partner.img}
                alt={partner.name}
                width={144}
                height={72}
                quality={95}
              />
            </MotionDiv>
          ))}
        </div>
      </section>

      {/**Features Section */}
      <section className="mt-3 padding flex flex-col">
        <h1 className=" font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
          Features
        </h1>
        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0.5, once: false }}
          className=" lg:flex lg:flex-row md:flex md:flex-col gap-[54px]  padding-x "
        >
          <FeatureCard
            img="/icons/Feature1.png"
            title="Secure record-keeping"
            description="Ensures that student data is protected from unauthorized access or tampering, offering peace of mind for both schools and families."
          />
          <div className="lg:mt-[280px]  flex items-center">
            <FeatureCard
              img="/icons/Feature2.png"
              title="Streamlined processes"
              description="Streamlined processes automate and simplify administrative tasks, reducing time and resources required for tasks like enrolment, clearance, and acceptance, making school operations more efficient."
            />
          </div>
        </MotionDiv>

        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0.5, once: false }}
          className=" lg:flex lg:flex-row md:flex md:flex-col gap-[54px] lg:mt-[-100px] md:mt-[100px]  padding-x "
        >
          <FeatureCard
            img="/icons/Feature3.png"
            title="Decentralized storage"
            description="Student records are not stored in a single, vulnerable location, enhancing data security and ensuring that records remain accessible even in case of system failures."
          />
          <div className="lg:mt-[280px]   flex items-center">
            <FeatureCard
              img="/icons/Data-analytics.png"
              title="Reports and Analytics"
              description="Empowers administrators by providing in-depth insights into academic performance, enrolment trends, and institutional metrics. Utilizing data-driven analytics and comprehensive reporting,it identifies areas for improvement, and enhances overall efficiency."
            />
          </div>
        </MotionDiv>

        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0.5, once: false }}
          className=" lg:flex lg:flex-row md:flex md:flex-col lg:mt-[100px] md:mt-[100px]  gap-[54px] padding-x "
        >
          <FeatureCard
            img="/icons/Feature4.png"
            title="NFT services"
            description="Providing unique digital tokens for academic achievements, creating a verifiable and tradable record of a student's accomplishments, thereby offering a modern and innovative approach to recognizing achievements"
          />
        </MotionDiv>
      </section>

      {/**About Preview */}
      <section id="about" className="padding-x py-[118px]">
        <AboutPreview />
      </section>

      {/**Review Sections */}
      <section className=" w-full h-[900px] bg-review object-contain bg-cover flex  justify-center items-center md:overflow-x-hidden">
        <ReviewCard />
      </section>

      {/**FAQs */}
      <section className="w-full h-[600px] padding-x flex flex-col">
        <p className="text-[24px] mt-[24px] font-bold font-Inconsolata leading-[36px] tracking-[0.24px] ">
          FAQs
        </p>
        <div className="flex flex-col mt-[48px] self-center">
          <Faq />
        </div>
      </section>
    </motion.section>
  );
};

export default Page;
