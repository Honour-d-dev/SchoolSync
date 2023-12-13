"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { FormProps } from "@/lib/types";
import NextStepBtn from "./NextStepBtn";
import { useEdgeStore } from "@/lib/edgestore";
import { handleStudentFormData } from "@/actions/handleFormData";
import { UploadImageIcon } from "@/public/icons/uploadImageIcon";

const SignupForm = ({
  formTitle,
  formDescription,
  inputTitle1,
  inputTitle2,
  inputTitle3,
  inputTitle4,
  buttonText,
}: FormProps) => {
  const { edgestore } = useEdgeStore();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleUpload = async (formData: FormData) => {
    const file = formData.get("image") as File;
    let url;
    console.log(file);

    if (file) {
      const res = await edgestore.publicImages.upload({
        file,
      });
      url = res.url;
    }
    await handleStudentFormData(formData, url as string);
  };
  return (
    <div className=" flex flex-col w-[540px] h-auto rounded-[12px] signUpCard">
      <div className="flex flex-row  items-center  gap-2">
        <Image src="/icons/logo.png" alt="logo" width={100} height={100} />
        <h1 className="text-[32px] font-Tomorrow font-semibold leading-[32px] tracking-[0.32px] text-[#1C364D]">
          SchoolSync
        </h1>
      </div>
      <div className="flex flex-col pl-[70px]">
        <h3 className=" text-secondary_text font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
          {formTitle}
        </h3>
        <p className="text-[12px] font-SpaceGrotesk font-normal leading-[18px] tracking-[0.4px] text-secondary_text">
          {formDescription}
        </p>
      </div>
      <form
        action={(FormData) => {
          handleUpload(FormData);
        }}
        className="mt-[40px] flex flex-col pl-[70px] gap-[36px]"
      >
        <div className="flex flex-col gap-2">
          <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
            {inputTitle1}
          </p>
          <input
            type="text"
            name="fullName"
            required
            className=" w-[358px] h-[48px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
            {inputTitle2}
          </p>
          <input
            type="email"
            name="email"
            required
            className=" w-[358px] h-[48px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
            {inputTitle3}
          </p>
          <input
            type="text"
            name="school"
            required
            className=" w-[358px] h-[48px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
            {inputTitle4}
          </p>
          <div className="flex flex-col items-center gap-3 border w-[340px] h-auto py-15  border-secondary_text border-dashed rounded-[20px]">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-[100px] mt-7"
              />
            ) : (
              <p className="mt-9 text-[14px] font-OpenSans font-semibold leading-[20px] tracking-[0.28px]">
                Upload Image
              </p>
            )}
            <label htmlFor="imageButton">
              <UploadImageIcon />
            </label>
            <input
              type="file"
              name="image"
              accept=".png, .jpg, .jpeg, .svg"
              id="imageButton"
              placeholder="Upload image"
              required
              onChange={handleImageChange}
              className="w-[1px] opacity-0"
            />
          </div>
        </div>

        <NextStepBtn buttonText={buttonText} />
      </form>
      <p className=" mt-2 self-center font-sans text-[14px] font-medium">
        {" "}
        Already have an account? Proceed to{" "}
        <span className="text-white">Connect Wallet</span>
      </p>
    </div>
  );
};

export default SignupForm;
