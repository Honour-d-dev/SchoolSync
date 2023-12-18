import React from "react";
import SignupForm from "@/components/SignupForm";
const Page = () => {
  return (
    <section className=" flex flex-col padding bg-signUp bg-contain min-h-screen">
      <div className="flex flex-row self-end">
        <SignupForm
          formTitle="School Staff Sign Up"
          formDescription="New to Payclick, create an account with few clicks"
          inputTitles={["Full Name", "Email Address", "School Name"]}
          imageText={`Staff I.D Card`}
          buttonText="Next Step"
        />
      </div>
    </section>
  );
};

export default Page;
