"use client";
import { useState } from "react";
import { parseEther } from "viem";
import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";
import { useWallet } from "@/context/walletContext";
import { UploadImageIcon } from "@/public/icons/uploadImageIcon";
import NextStepBtn from "@/components/NextStepBtn";
import Image from "next/image";
import { institutionV2 } from "@/lib/contract";
import { StudentData } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import { useImagePreview } from "@/lib/utils";

const Page = () => {
  const { edgestore } = useEdgeStore();
  const { connectWallet } = useWallet();
  const [pending, setPending] = useState(false);
  const [imagePreview, handleImageChange] = useImagePreview();
  const { toast } = useToast();
  const router = useRouter();

  const handleUpload = async (formData: FormData) => {
    const file = formData.get("image") as File;

    const data: StudentData = {
      name: formData.get("fullName") as string,
      email: formData.get("email") as string,
      school: formData.get("school") as string,
      department: formData.get("department") as string,
      matricNo: formData.get("matric") as string,
    };

    const dataFile = new File([new Blob([JSON.stringify(data)])], data.name, {
      type: "application/json",
    });

    const docRes = await edgestore.publicImages.upload({
      file: file,
    });
    const dataRes = await edgestore.publicFiles.upload({
      file: dataFile,
    });

    return { data, docRes, dataRes };
  };

  const handleRegistration = async (formData: FormData) => {
    try {
      setPending(true);
      const wallet = await connectWallet();

      const isRegistered = await wallet.readContract({
        ...institutionV2,
        functionName: "isRegistered",
        args: [wallet.account.address],
      });

      if (!isRegistered) {
        const { data, docRes, dataRes } = await handleUpload(formData);

        try {
          const result = await wallet.simulateContract({
            ...institutionV2,
            functionName: "studentRegistration",
            args: [
              BigInt(data.matricNo),
              BigInt(data.matricNo.slice(0, 4)), //assumes the year is the first 4 digits
              data.department,
              dataRes.url,
              docRes.url,
            ],
            value: parseEther("0.001"),
          });

          const hash = await wallet.writeContract(result.request);
          await wallet.waitForTransactionReceipt({ hash });
        } catch (e) {
          /**transaction failed */
          let message = "";
          if (e instanceof Error) message = e.message;
          toast({
            title: "Registration Failed",
            description: `Student registration failed: ${message}`,
          });
          setPending(false);
          return;
        }
        setPending(false);

        router.push("/student");
      } else {
        toast({
          title: "Account Error",
          description: "Student already exists",
        });

        setPending(false);
      }
    } catch (e) {
      let title = "Registration Error";
      let message = "";

      /**Some Errors i.e Metamask erors are not Error instances */
      if (e && typeof e === "object") {
        if ("message" in e) message = e.message as string;
        if ("name" in e) title = e.name as string;
      }

      toast({
        title,
        description: `Registration failed: ${message}`,
      });
      setPending(false);
    }
  };

  const loginExistingUser = async () => {
    try {
      setPending(true);
      const wallet = await connectWallet();

      const isRegistered = await wallet.readContract({
        ...institutionV2,
        functionName: "isRegistered",
        args: [wallet.account.address],
      });

      if (isRegistered) {
        setPending(false);
        router.push("/student");
      } else {
        toast({
          title: "Account Error",
          description: "Student account does not exist",
        });
        setPending(false);
      }
    } catch (e) {
      let title = "Account Error";
      let message = "";

      if (e && typeof e === "object") {
        if ("message" in e) message = e.message as string;
        if ("name" in e) title = e.name as string;
      }

      toast({
        title,
        description: `${message}`,
      });
      setPending(false);
    }
  };

  return (
    <section className=" flex flex-col padding bg-signUp min-h-screen">
      <div className="flex flex-row self-center md:self-end">
        <div className=" flex flex-col w-[90vw] sm:w-[80vw] p-4 md:pr-8 md:w-[540px] h-auto rounded-[12px] signUpCard">
          <div className="flex flex-row  items-center  md:gap-2 -ml-6 sm:ml-0">
            <Image src="/icons/logo.png" alt="logo" width={100} height={100} />
            <h1 className="text-[32px] font-Tomorrow font-semibold leading-[32px] tracking-[0.32px] text-[#1C364D] -ml-2 sm:ml-0">
              SchoolSync
            </h1>
          </div>
          <div className="flex flex-col pl-[30px] md:pl-[70px]">
            <h3 className=" text-secondary_text font-Inconsolata text-[24px] font-semibold leading-[36px] tracking-[0.24px]">
              Student Sign Up
            </h3>
            <p className="text-[12px] font-SpaceGrotesk font-normal leading-[18px] tracking-[0.4px] text-secondary_text">
              New to Payclick, create an account with few clicks
            </p>
          </div>
          <form
            action={async (FormData) => {
              handleRegistration(FormData);
            }}
            className="mt-[40px] flex flex-col pl-[30px] md:pl-[70px] gap-4 md:gap-6"
          >
            <div className="flex flex-col gap-1">
              <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                Full Name
              </p>
              <input
                type="text"
                name="fullName"
                required
                className=" flex h-[40px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                Email Address
              </p>
              <input
                type="text"
                name="email"
                required
                className=" flex h-[40px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                School
              </p>
              <input
                type="text"
                name="school"
                required
                className=" flex h-[40px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                Department
              </p>
              <input
                type="text"
                name="department"
                required
                className=" flex h-[40px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                Matric No.
              </p>
              <input
                type="text"
                name="matric"
                required
                className=" flex h-[40px] border border-secondary_text rounded-[8px] outline-none font-OpenSans bg-transparent pl-3 text-[12px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className=" font-OpenSans text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                Student's I.D Card
              </p>
              <label htmlFor="imageButton">
                <div className="flex flex-col items-center gap-2 border h-auto py-15  border-secondary_text border-dashed rounded-[20px]">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-[100px] mt-5"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <span className="mt-5 text-[14px] font-OpenSans font-semibold leading-[20px] tracking-[0.28px]">
                        Upload Image
                      </span>
                      <UploadImageIcon />
                    </div>
                  )}
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
              </label>
            </div>

            <NextStepBtn buttonText="Next Step" pending={pending} />
          </form>
          <span className="text-xs text-center pt-1 font-medium">
            Registration incurs a min. 0.001 ether fee
          </span>
          <p className=" mt-2 self-center font-sans text-[14px] font-medium">
            {" "}
            Already have an account? Proceed to{" "}
            <button
              className="text-white hover:underline"
              onClick={async () => await loginExistingUser()}
            >
              Connect Wallet
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
