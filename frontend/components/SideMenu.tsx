import { AlignJustify, ChevronDown, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Home } from "@/public/icons/home";
import { Activity } from "@/public/icons/activity";
import { Book } from "@/public/icons/book";
import { AdminIcon } from "@/public/icons/admin";
import { Records } from "@/public/icons/records";
import { Separator } from "./ui/seperator";
import { Profile } from "@/public/icons/profile";
import { Setting } from "@/public/icons/setting";
import { Message } from "@/public/icons/message";
import { Notification } from "@/public/icons/direct-notification";
import logo from "@/public/icons/logo.png";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export const SideMenu = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  return (
    <>
      {/*todo use sheets from shadcn*/}
      <button
        className={`md:hidden ${
          showMenu ? "hidden" : ""
        } absolute top-4 left-4`}
        onClick={() => setShowMenu((p) => !p)}
      >
        <AlignJustify />
      </button>
      <div
        className={`rounded-r-3xl h-screen min-w-[210px] w-[25%] bg-primary-400 items-center flex-col pt-12 p-2 gap-16 absolute top-0 left-0 z-10 md:relative ${
          !showMenu ? "hidden md:flex" : "flex"
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
          value={value}
          onValueChange={(value) => setValue(value)}
          className="flex flex-col gap-4"
        >
          <ToggleGroupItem
            value="dashboard"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Home />
            <span className="text-white font-Inconsolata ml-4 text-base">
              {" "}
              Dashboard
            </span>
          </ToggleGroupItem>
          {/* <ToggleGroupItem
            value="activity"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Activity />
            <span className="text-white font-Inconsolata ml-4"> Activity</span>
          </ToggleGroupItem> */}
          <Collapsible
            open={isCollapsibleOpen}
            onOpenChange={setIsCollapsibleOpen}
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <CollapsibleTrigger
              className={`flex flex-row px-3 py-2 rounded  ${
                value === "grades" || value === "transcript"
                  ? "border-r border-accent-400"
                  : ""
              }`}
            >
              <Book />
              <span className="text-white font-Inconsolata whitespace-nowrap ml-2 text-base">
                Academic Records
              </span>
              <ChevronDown
                className={`ml-2 w-4 ${isCollapsibleOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ToggleGroupItem
                value="grades"
                className="text-white data-[state=on]:text-accent-400 w-full justify-start"
              >
                <span className=" font-Inconsolata ml-4 text-base">Grades</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="transcript"
                className="text-white data-[state=on]:text-accent-400 w-full justify-start"
              >
                <span className=" font-Inconsolata ml-4 text-base">
                  Transcript
                </span>
              </ToggleGroupItem>
            </CollapsibleContent>
          </Collapsible>
          <ToggleGroupItem
            value="student records"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <Records />
            <span className="text-white font-Inconsolata ml-4 text-base">
              Student Records
            </span>
          </ToggleGroupItem>
          {/* <ToggleGroupItem
            value="admin"
            className="text-white data-[state=on]:text-accent-400 data-[state=on]:border-r data-[state=on]:border-accent-400 w-full justify-start"
          >
            <AdminIcon />
            <span className="text-white font-Inconsolata ml-4">Admin</span>
          </ToggleGroupItem> */}

          <Separator className="bg-accent-400 my-8" />

          <ToggleGroupItem
            value="profile"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start text-base"
          >
            <Profile />
            Profile
          </ToggleGroupItem>
          {/* <ToggleGroupItem
            value="notification"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start"
          >
            <Notification />
            Notification
          </ToggleGroupItem> */}
          {/* <ToggleGroupItem
            value="settings"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start"
          >
            <Setting />
            Settings
          </ToggleGroupItem> */}
          <ToggleGroupItem
            value="help"
            className="text-white data-[state=on]:text-primary-400 data-[state=on]:bg-white font-Inconsolata gap-4 w-full justify-start text-base"
          >
            <Message />
            Help & Support
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </>
  );
};
