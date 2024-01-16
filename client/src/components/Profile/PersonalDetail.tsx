"use client";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useEditProfileMutation } from "@/redux/features/user/userApi";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsFillPersonFill } from "react-icons/bs";

interface PersonalDetailProps {
  setOpen: (open: boolean) => void;
  name: string;
  email: string;
}

const PersonalDetail: FC<PersonalDetailProps> = ({ setOpen, name, email }) => {
  const [editProfile, { isSuccess, error }] = useEditProfileMutation();
  const { isLoading: meLoading, refetch } = useLoadUserQuery(undefined);

  const [newName, setNewName] = useState(name);

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
    if (error) {
      console.log(error);
    }
    if (isSuccess) {
      toast.success("Profile updated successfully");
    }
  }, [error, isSuccess, refetch]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (newName !== "") {
      await editProfile({
        name: newName,
      });
    }
  };

  return (
    <div>
      <div className=" pointer-events-auto fixed top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,0.6)] select-none box-border block  ">
        <div className=" visible pointer-events-auto flex absolute items-center justify-center h-[100vh] w-full top-0 select-none box-border">
          <div className=" overflow-hidden w-[360px] flex flex-col justify-between z-[100] relative max-h-[90vh] bg-background dark:bg-background-darkHover backdrop-blur-[32px] rounded-[16px] visible pointer-events-auto box-border select-none   ">
            <button
              onClick={() => setOpen(false)}
              className=" h-6 w-6 dark:bg-background-darkHover dark:hover:bg-background-darkHover/70 bg-accent hover:bg-accent/90 flex justify-center items-center  top-6 right-6 absolute cursor-pointer z-[100] rounded-md text-center"
            >
              <svg
                className=" align-middle cursor-pointer dark:text-white text-black"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 3.5L12.5 12.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3.5 12.5L12.5 3.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div className=" h-[200px] w-full ">
              <Image
                className=" w-full h-full object-cover overflow-hidden "
                src="/assets/details.png"
                alt="The 3D journey starts here"
                width={400}
                height={400}
                priority
              />
            </div>

            {/* <div className="text-[16px] leading-6 text-background-foregroundL dark:text-white font-semibold mt-[24px] mb-[8px] text-center">
              Update your profile
            </div> */}
            <div className=" py-2 px-6">
              <label className={` hidden `}>Username</label>
              <div className="mt-2">
                <div
                  className={`  flex rounded-md h-[44px] shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`}
                >
                  <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                    <BsFillPersonFill className=" h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    name=""
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    id="name"
                    className={`block flex-1 border-0 bg-transparent w-full h-full py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>
            </div>
            <div className=" p-6 text-sm flex justify-center gap-2">
              <button
                onClick={() => setOpen(false)}
                className=" h-[44px] rounded-[3px] px-4  w-full  pb-[1px] shadow-md bg-accent dark:bg-[rgba(255,255,255,.03)] text-background-foregroundL  dark:text-[rgba(255,255,255,.4)] leading-4 whitespace-nowrap "
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className=" h-[44px] rounded-[3px] px-4  w-full pb-[1px] bg-primary-dark shadow-2xl text-white leading-4 whitespace-nowrap"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
