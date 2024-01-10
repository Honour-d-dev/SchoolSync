"use client";
import Image from "next/image";
import fileImg from "@/public/icons/notes composition.png";
import { useEffect, useState } from "react";
import { useWallet } from "@/context/walletContext";
import { institutionV2 } from "@/lib/contract";
import { StudentData } from "@/lib/types";
import MetamaskPrompt, {
  useMetamaskInstalled,
} from "@/components/MetamaskPrompt";
import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/HomePage-Header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useImagePreview } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getDownloadUrl } from "@edgestore/react/utils";

export default function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [studentInfo, setStudentInfo] = useState<StudentData>();
  const [documents, setDocuments] = useState<readonly string[]>();
  const [imagePreview, handleImageChange] = useImagePreview();
  const { account, wallet, connectWallet } = useWallet();
  const { toast } = useToast();
  const router = useRouter();
  const isMetamaskInstalled = useMetamaskInstalled();

  useEffect(() => {
    async function connect() {
      try {
        const wallet = await connectWallet();

        const isRegistered = await wallet.readContract({
          ...institutionV2,
          functionName: "isRegistered",
          args: [wallet.account.address],
        });

        if (isRegistered) {
          const studentInfo = await wallet.readContract({
            ...institutionV2,
            functionName: "getStudent",
          });

          const res = await fetch(studentInfo.studentInfo);
          const data: StudentData = await res.json();
          setStudentInfo(data);
          setDocuments(studentInfo.documents);
        } else {
          router.push("/get-started");
        }
      } catch (e) {
        let title = "Account Error";
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
      }
    }
    connect();
  }, []);

  if (!isMetamaskInstalled) return <MetamaskPrompt />;
  return (
    <div className="bg-white w-screen h-screen flex flex-row">
      <SideMenu value={activeTab} setValue={setActiveTab} />
      <div className="flex flex-col justify-start p-6 w-full">
        <Header name={studentInfo?.name} />
        {/* content */}
        {activeTab === "student records" ? (
          <div className="grid p-6 gap-2 grid-cols-4 w-full">
            {documents?.map((doc) => {
              return (
                <>
                  <Image
                    src={doc}
                    alt="document"
                    key={doc}
                    width={500}
                    height={700}
                    className="rounded p-2 w-full border border-gray-300"
                  />
                  <a href={getDownloadUrl(doc)} download="document">
                    download
                  </a>
                </>
              );
            })}
          </div>
        ) : null}
        {activeTab === "dashboard" ? (
          <div className="flex flex-col w-full h-full">
            <h1 className="self-start font-semibold text-3xl">
              Welcome to SchoolSync
            </h1>
            <div className="h-full w-full flex justify-center items-center flex-col">
              <div className="flex flex-col items-center">
                <Image
                  src={fileImg}
                  alt="no files"
                  className="h-[350px] w-[350px]"
                />
                <span>No records yet</span>
              </div>
              <span className="mt-8">
                Go to Profile to fill in your required information
              </span>
            </div>
          </div>
        ) : null}
        {activeTab === "profile" ? (
          <div className="h-full">
            <form action="" className="flex flex-col gap-8 h-full pb-10">
              <div>
                <Avatar className="h-[120px] w-[120px]">
                  <AvatarImage
                    src={imagePreview ?? "/images/defaultProfile.png"}
                    className=""
                  />
                </Avatar>
                <span className="text-sm">
                  Upload Photo{" "}
                  <label
                    className="text-xs rounded-md bg-accent-300 px-1 opacity-80"
                    htmlFor="uploadImage"
                  >
                    choose media
                  </label>
                  <input
                    type="file"
                    id="uploadImage"
                    className="invisible w-0"
                    accept=".png, .jpg, .jpeg, .svg"
                    onChange={handleImageChange}
                  />
                </span>
              </div>
              <div className=" flex flex-col justify-evenly md:grid md:grid-cols-2 gap-2 md:gap-x-8 font-Inconsolata grow">
                <div className="flex flex-row justify-between items-center order-1">
                  <label className="w-[165px]" htmlFor="">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue={studentInfo?.name.split(" ")[0] ?? ""}
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-4 md:order-2">
                  <label className="w-[165px]" htmlFor="">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-2 md:order-3">
                  <label className="w-[165px]" htmlFor="">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue={studentInfo?.name.split(" ")[1] ?? ""}
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-5 md:order-4">
                  <label className="w-[165px]" htmlFor="">
                    Email Address
                  </label>
                  <input
                    type="text"
                    defaultValue={studentInfo?.email ?? ""}
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-3 md:order-5">
                  <label className="w-[165px]" htmlFor="">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-11 md:order-6">
                  <label className="w-[165px]" htmlFor="">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-6 md:order-7">
                  <label className="w-[165px]" htmlFor="">
                    Gender
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center row-span-2 order-12 md:order-8">
                  <label className="w-[165px]" htmlFor="">
                    Address
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-7 md:order-9">
                  <label className="w-[165px]" htmlFor="">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-8 md:order-10">
                  <label className="w-[165px]" htmlFor="">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-10 md:order-11">
                  <label className="w-[165px]" htmlFor="">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-9 md:order-12">
                  <label className="w-[165px]" htmlFor="">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
                <div className="flex flex-row justify-between items-center order-[13]">
                  <label className="w-[165px]" htmlFor="">
                    postal address
                  </label>
                  <input
                    type="text"
                    className="rounded-lg focus-visible:outline-none border border-gray-400 h-full flex grow pl-4"
                  />
                </div>
              </div>
              <div className="flex w-full flex-row justify-end">
                <button
                  disabled
                  className="rounded-[12px] shadow-md shadow-black bg-accent-300 p-2 px-8"
                >
                  save
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}
