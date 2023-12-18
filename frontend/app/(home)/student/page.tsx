"use client";
import logo from "@/public/icons/logo.png";
import Image from "next/image";
import fileImg from "@/public/icons/notes composition.png";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/seperator";
import { Home } from "@/public/icons/home";
import { Activity } from "@/public/icons/activity";
import { Book } from "@/public/icons/book";
import { Records } from "@/public/icons/records";
import { AdminIcon } from "@/public/icons/admin";
import { Profile } from "@/public/icons/profile";
import { Notification } from "@/public/icons/direct-notification";
import { Setting } from "@/public/icons/setting";
import { Message } from "@/public/icons/message";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { useWallet } from "@/context/walletContext";
import { institutionV2Abi } from "@/lib/abi";

export default function Student() {
  const [showMenu, setShowMenu] = useState(false);
  const [studentInfo, setStudentInfo] = useState();
  const [documents, setDocuments] = useState<readonly string[]>();
  const { account, wallet, connectWallet } = useWallet();

  useEffect(() => {
    async function connect() {
      await connectWallet();
    }
    connect();
  }, []);

  useEffect(() => {
    async function getInfo() {
      if (wallet && account) {
        const studentInfo = await wallet.readContract({
          address: "0x2E55967fed33582c776CC740CF541bDb774Cb9F2",
          abi: institutionV2Abi,
          functionName: "getStudent",
        });
        console.log(studentInfo);
        const res = await fetch(studentInfo.studentInfo);
        const data = await res.json();
        setStudentInfo(data);
        setDocuments(studentInfo.documents);
        console.log(data, studentInfo.documents);
      }
    }
    getInfo();
  }, [account, wallet]);

  return (
    <div className="bg-white w-screen h-screen flex flex-row">
      <button
        className={`md:hidden ${
          showMenu ? "hidden" : ""
        } absolute top-4 left-4`}
        onClick={() => setShowMenu((p) => !p)}
      >
        <AlignJustify />
      </button>
      {/* side menu */}
      <div
        className={`rounded-r-3xl h-screen min-w-[210px] w-1/5 bg-primary-400 items-center md:flex flex-col pt-12 p-2 gap-4 relative ${
          !showMenu ? "hidden" : "flex"
        }`}
      >
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={() => setShowMenu((p) => !p)}
        >
          <X />
        </button>
        <div className="bg-white rounded flex flex-col justify-center items-center p-1 w-fit">
          <Image src={logo} alt="logo" className="h-14 w-14" />
          <span className="text-xs -mt-2">SchoolSync</span>
        </div>
        <ToggleGroup
          type="single"
          defaultValue="dashboard"
          className="flex flex-col"
        >
          <ToggleGroupItem
            value="dashboard"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Home />
            <span className="text-white font-Inconsolata ml-4"> Dashboard</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="activity"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Activity />
            <span className="text-white font-Inconsolata ml-4"> Activity</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="academics"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Book />
            <span className="text-white font-Inconsolata ml-4"> Academics</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="student records"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Records />
            <span className="text-white font-Inconsolata ml-4">
              Student Records
            </span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="admin"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <AdminIcon />
            <span className="text-white font-Inconsolata ml-4">Admin</span>
          </ToggleGroupItem>

          <Separator className="bg-accent-400 my-8" />

          <ToggleGroupItem
            value="profile"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start"
          >
            <Profile />
            Profile
          </ToggleGroupItem>
          <ToggleGroupItem
            value="notification"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start"
          >
            <Notification />
            Notification
          </ToggleGroupItem>
          <ToggleGroupItem
            value="settings"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start"
          >
            <Setting />
            Settings
          </ToggleGroupItem>
          <ToggleGroupItem
            value="help"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start"
          >
            <Message />
            Help & Support
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* content */}
      <div className="flex flex-col justify-center p-6 grow pt-12">
        <button
          className="p-2 bg-primary-400 absolute top-4 right-4"
          onClick={async () => await connectWallet()}
        >
          {account ? `${account.slice(0, 6)}...` : "connect"}
        </button>
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
  );
}
