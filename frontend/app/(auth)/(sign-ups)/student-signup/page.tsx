import React from "react";
import SignupForm from "@/components/SignupForm";
const Page = () => {
  return (
    <section className=" flex flex-col padding bg-signUp min-h-screen">
      <div className="flex flex-row self-end">
        <SignupForm
          formTitle="Student Sign Up"
          formDescription="New to Payclick, create an account with few clicks"
          inputTitle1="Full Name"
          inputTitle2="Email Address"
          inputTitle3="School Name"
          inputTitle4={`Student's I.D Card`}
          buttonText="Next Step"
        />
      </div>
    </section>
  );
};

export default Page;
