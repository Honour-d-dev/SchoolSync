import React from 'react';

const Page = () => {
  return (
    <section className="padding flex flex-col mt-[50px] gap-[60px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[48px] font-OpenSans font-bold leading-[68px]">
          About Us
        </h1>
        <p className="text-[20px] font-normal font-OpenSans leading-[32px] max-w-[1230px]">
          At SchoolSync, we are at the forefront of educational innovation,
          leading the charge in transforming the way schools and institutions
          manage their operations. Our mission is simple yet powerful: to bring
          transparency, security, and efficiency to the world of education by
          harnessing the potential of blockchain technology.
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        <h4 className="text-[24px] font-Inconsolata font-semibold leading-[36px] tracking-[0.24px]">
          Our Story
        </h4>
        <p className="text-[16px] font-OpenSans font-normal leading-[24px] tracking-[0.16px] max-w-[1230px]">
          The story of SchoolSync is one fueled by a passion for revolutionizing
          traditional systems and an unwavering commitment to improving the
          educational landscape. We recognized the challenges that educational
          institutions face daily, from time-consuming administrative processes
          to concerns about data security and transparency. It was this
          recognition that inspired us to create SchoolSync.
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        <h4 className="text-[24px] font-Inconsolata font-semibold leading-[36px] tracking-[0.24px]">
          The SchoolSync Difference
        </h4>
        <p className="text-[16px] font-OpenSans font-normal leading-[24px] tracking-[0.16px] max-w-[1230px]">
          At the heart of our platform lies the transformative power of
          blockchain technology. This cutting-edge approach ensures that student
          records are not only securely stored but are also immutable, rendering
          them invulnerable to tampering or unauthorized access. We believe in a
          future where transparency is paramount, and our system brings that
          vision to life by making all actions and changes fully accountable and
          visible.
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        <h4 className="text-[24px] font-Inconsolata font-semibold leading-[36px] tracking-[0.24px]">
          Why Choose SchoolSync
        </h4>
        <p className="text-[16px] font-OpenSans font-normal leading-[24px] tracking-[0.16px] max-w-[1230px]">
          <span className="font-bold">Security</span>: Our top priority is the
          protection of your data. With SchoolSync, your student records are
          safeguarded with the highest level of security, eliminating the risk
          of data breaches and ensuring the privacy of every student
        </p>

        <p className="text-[16px] font-OpenSans font-normal leading-[24px] tracking-[0.16px] max-w-[1230px]">
          <span className="font-bold">Transparency</span>: We firmly believe in
          open and transparent educational environments. SchoolSync's blockchain
          technology provides a level of transparency that enables everyone
          involved, from students and parents to educators and administrators,
          to access and verify data with ease.
        </p>

        <p className="text-[16px] font-OpenSans font-normal leading-[24px] tracking-[0.16px] max-w-[1230px]">
          <span className="font-bold">Efficiency</span>: Say farewell to the
          tedious and time-consuming tasks associated with processes like
          clearance and acceptance. SchoolSync automates these processes,
          streamlining your operations and freeing up valuable resources.
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        <h4 className="text-[24px] font-Inconsolata font-semibold leading-[36px] tracking-[0.24px]">
          Join the SchoolSync Community
        </h4>
        <p className="text-[16px] font-OpenSans font-normal leading-[24px] tracking-[0.16px] max-w-[1230px]">
          We invite you to join the SchoolSync community and embark on a journey
          toward a smarter, more secure, and more efficient educational future.
          With SchoolSync, you're not just adopting a technology; you're
          embracing a revolution that will empower educational institutions to
          thrive in the digital age. <br />
          <br />
          <span className="font-bold text-[14px] leading-[20px] tracking-[0.28px] mt-[19px]">
            Welcome to SchoolSync – where the future of education management
            begins.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Page;
