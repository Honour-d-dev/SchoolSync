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

export default function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [studentInfo, setStudentInfo] = useState<StudentData>();
  const [documents, setDocuments] = useState<readonly string[]>();
  const { account, wallet, connectWallet } = useWallet();
  const isMetamaskInstalled = useMetamaskInstalled();

  useEffect(() => {
    async function connect() {
      const wallet = await connectWallet();
      if (!wallet) return;
      const studentInfo = await wallet.readContract({
        ...institutionV2,
        functionName: "getStudent",
      });
      console.log(studentInfo);
      const res = await fetch(studentInfo.studentInfo);
      const data: StudentData = await res.json();
      setStudentInfo(data);
      setDocuments(studentInfo.documents);
      console.log(data, studentInfo.documents);
    }
    connect();
  }, []);

  if (!isMetamaskInstalled) return <MetamaskPrompt />;
  return (
    <div className="bg-white w-screen h-screen flex flex-row">
      <SideMenu value={activeTab} setValue={setActiveTab} />
      <div className="flex flex-col justify-start p-6 grow">
        <Header name={studentInfo?.name} account={account} />
        {/* content */}
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
      </div>
    </div>
  );
}
