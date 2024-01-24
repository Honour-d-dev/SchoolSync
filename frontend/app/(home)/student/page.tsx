"use client";
import Image from "next/image";
import fileImg from "@/public/icons/notes composition.png";
import { useEffect, useState } from "react";
import { useWallet } from "@/context/walletContext";
import { institutionV2 } from "@/lib/contract";
import { Sessions, StudentData } from "@/lib/types";
import MetamaskPrompt, {
  useMetamaskInstalled,
} from "@/components/MetamaskPrompt";
import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/HomePage-Header";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { getDownloadUrl } from "@edgestore/react/utils";
import { Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import StudentProfile from "@/components/StudentProfile";
import Grades from "@/components/Grades";
import Transcript from "@/components/Transcript";
import Dashboard from "@/components/studentDashboard";

export default function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [studentInfo, setStudentInfo] = useState<StudentData>();
  const [documents, setDocuments] =
    useState<readonly { name: string; uri: string }[]>();
  const [sessions, setSessions] = useState<Sessions>();
  const { account, wallet, connectWallet } = useWallet();
  const { toastWithError } = useToast();
  const router = useRouter();
  const isMetamaskInstalled = useMetamaskInstalled();

  useEffect(() => {
    async function connect() {
      try {
        const wallet = await connectWallet();

        const isRegistered = await wallet.readContract({
          ...institutionV2,
          functionName: "isRegistered",
        });

        if (isRegistered) {
          const [studentInfo, documents, academicData] =
            await wallet.readContract({
              ...institutionV2,
              functionName: "getStudentData",
            });

          const res = await fetch(studentInfo.studentInfo);
          const data: StudentData = await res.json();
          setStudentInfo(data);
          setDocuments(documents);
          setSessions(academicData);
        } else {
          router.push("/get-started");
        }
      } catch (error) {
        toastWithError({
          title: "Account Error",
          description: ``, //todo
          error,
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
        <Header name={studentInfo?.name} id={studentInfo?.matricNo} />
        {/* content */}
        {activeTab === "student records" ? (
          <div className="grid p-6 gap-2 grid-cols-2 md:grid-cols-4 w-full">
            {documents?.map((doc) => {
              return (
                <Dialog key={doc.uri}>
                  <DialogTrigger asChild>
                    <div>
                      <div className="relative">
                        <Image
                          src={doc.uri}
                          alt="document"
                          width={500}
                          height={700}
                          className="rounded p-2 w-full border border-gray-300"
                        />
                        <a
                          className="absolute bottom-2 right-2 scale-90 hover:scale-110 opacity-80 transition-transform ease-in-out duration-300"
                          /**prevent from triggering the dialog */
                          onClick={(e) => e.stopPropagation()}
                          href={getDownloadUrl(doc.uri, doc.name)}
                          download
                        >
                          <Download className="bg-white rounded-md" />
                        </a>
                      </div>
                      <span className="overflow-hidden text-ellipsis font-Inconsolat font-semibold flex justify-center items-center">
                        {doc.name}
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="p-4 bg-gray-200">
                    <Image src={doc.uri} alt="doc" width={500} height={700} />
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        ) : null}
        {activeTab === "dashboard" ? <Dashboard /> : null}
        {activeTab === "profile" ? (
          <StudentProfile studentInfo={studentInfo!} />
        ) : null}
        {activeTab === "grades" ? <Grades sessions={sessions!} /> : null}
        {activeTab === "transcript" ? (
          <Transcript
            name={studentInfo?.name!}
            id={studentInfo?.matricNo!}
            sessions={sessions!}
          />
        ) : null}
      </div>
    </div>
  );
}
