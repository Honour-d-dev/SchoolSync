import React from 'react';
import { FAQs } from '@/lib/data';
import Image from 'next/image';

const Faq = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      {FAQs.map((faq) => (
        <div
          key={faq.id}
          className="flex flex-row justify-between border-t-2 gap-10 border-black"
        >
          <p className="text-[20px] font-bold font-OpenSans leading-[32px] tracking-[0.4px]">
            {faq.question}
          </p>
          <div className="flex items-center">
            <Image
              src="/icons/ToggleDown.png"
              alt="toggle"
              width={10}
              height={20}
              className=" hover:-rotate-90 transition-all"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
