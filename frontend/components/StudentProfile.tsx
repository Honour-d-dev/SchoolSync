import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useImagePreview } from "@/lib/utils";
import { StudentData } from "@/lib/types";

export default function StudentProfile({
  studentInfo,
}: {
  studentInfo: StudentData;
}) {
  const [editProfile, setEditProfile] = useState(false);
  const [imagePreview, handleImageChange] = useImagePreview();
  return editProfile ? (
    <div className="h-full">
      <button onClick={() => setEditProfile(false)}>
        {" "}
        <ArrowLeft />
      </button>
      <form action="" className="flex flex-col gap-8 h-[90%] pb-10">
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
  ) : (
    <div className="flex flex-col gap-4">
      <div>
        <Avatar className="h-[120px] w-[120px]">
          <AvatarImage
            src={imagePreview ?? "/images/defaultProfile.png"}
            className=""
          />
        </Avatar>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-start items-center">
          <table className="border-spacing-5 border-separate">
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <div className="p-1 border border-gray-700 rounded-lg px-4 font-Inconsolata w-full">
                    {studentInfo?.name}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Student ID</td>
                <td>
                  <div className="p-1 border border-gray-700 rounded-lg px-4 font-Inconsolata w-full">
                    {studentInfo?.matricNo}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>
                  <div className="p-1 border border-gray-700 rounded-lg px-4 font-Inconsolata w-full">
                    {studentInfo?.email}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-rows-1 grid-cols-6 w-full justify-end">
          <button
            onClick={() => setEditProfile(true)}
            className="rounded-[12px] shadow-md shadow-black bg-accent-300 p-2 px-8 col-start-3"
          >
            edit profile
          </button>
        </div>
      </div>
    </div>
  );
}
