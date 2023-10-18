import { FC } from "react";
import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsChevronRight, BsFillEnvelopeFill, BsGithub } from "react-icons/bs";
import Link from "next/link";
interface AuthModalProps {
  scroll: boolean;
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
}

const AuthModal: FC<AuthModalProps> = ({ scroll, setRoute, setOpen }) => {
  const handleEMailClick = () => {
    setOpen(true);
    setRoute("Sign-In");
  };

  const handleClose = () => {
    setOpen(false);
    setRoute("Auth");
  };

  return (
    <div className=" fixed top-[32px] my-0 mx-auto sm:relative sm:top-0 sm:max-w-[360px] items-start sm:items-center min-h-full flex w-full rounded-t-[12px] transition-[top] ease-in-out duration-300   ">
      <div className=" sm:relative absolute bottom-[32px]  sm:bottom-auto max-h-[calc((100%-32px)-0px)] rounded-[9px] pb-0 h-auto sm:max-h-full overflow-hidden sm:overflow-visible  w-full shadow-md ">
        <div
          className={` ${
            scroll ? "sm:right-auto sm:fixed" : "absolute right-0"
          } flex top-0 z-[800] justify-end items-center h-[52px] w-full max-w-[360px]`}
        >
          <button
            onClick={handleClose}
            type="button"
            className=" hover:bg-[rgba(255,255,255,.03)] mr-1 h-[44px] relative flex justify-between items-center text-center max-w-full bg-transparent rounded-[6px] font-medium text-[15px] w-[44px] transition-all ease-in-out duration-300   "
          >
            <div className=" align-middle h-full w-full flex justify-center items-center">
              <div className=" flex items-center h-full w-full justify-center">
                <svg
                  className=" fill-white w-5 h-5 shrink-0 align-middle "
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M17.656 6.333a.9.9 0 0 1 0 1.273l-4.046 4.052a.48.48 0 0 0 0 .678l4.047 4.053a.9.9 0 0 1 .08 1.18l-.081.092a.9.9 0 0 1-1.273 0l-4.044-4.05a.48.48 0 0 0-.68 0l-4.042 4.05a.9.9 0 1 1-1.274-1.273l4.047-4.052a.48.48 0 0 0 0-.678L6.343 7.606a.9.9 0 0 1-.08-1.18l.081-.093a.9.9 0 0 1 1.273.001l4.043 4.049a.48.48 0 0 0 .679 0l4.044-4.049a.9.9 0 0 1 1.273 0Z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className=" mb-0 p-0 w-full block rounded-t-[16px] overflow-hidden bg-background dark:bg-[#191a1d]">
          <div className=" h-[250px]">
            <Image
              className=" w-full object-cover h-full "
              src="/assets/pexels-pixabay-264905.jpg"
              alt="The 3D journey starts here"
              width={400}
              height={200}
              priority
              quality={100}
            />
          </div>

          <div className=" px-4 sm:px-[32px] mt-4">
            <h1 className="  text-[22px] text-background-foregroundL dark:text-background-foregroundD font-semibold sm:text-[28px] sm:font-bold">
              Unlock Your Learning Potential
            </h1>
            <div className=" mt-2 ">
              <div className=" text-[16px] font-normal text-background-foregroundL dark:text-background-foregroundD leading-[24px] text-left ">
                Done with tutorial chaos and information overload? We&apos;ve
                got you covered!
              </div>
            </div>
          </div>
        </div>
        <div className=" -mt-1  rounded-b-none sm:rounded-b-[9px] py-6 px-4 sm:p-[32px] w-full bg-background dark:bg-[#191a1d] pb-10  ">
          <p className=" text-[16px] text-background-foregroundL dark:text-background-foregroundD  font-bold leading-[24px] mb-2 text-left ">
            Continue with one of these:
          </p>
          <div className="  gap-3 flex flex-col items-center w-full mb-4 ">
            <button
              type="button"
              className=" relative h-[44px] flex justify-between items-center text-center max-w-full transition-colors ease-in-out duration-500 bg-[#EEE5FD] hover:bg-[#D5CCE4] dark:hover:bg-[rgba(255,255,255,.06)] dark:bg-[rgba(255,255,255,.03)] px-4 rounded-[6px] w-full cursor-pointer"
            >
              <div className=" align-middle h-full flex w-full justify-start items-center">
                <div className=" flex items-center justify-center mr-2 ">
                  <FcGoogle className=" w-5 h-5 shrink-0 align-middle" />
                </div>
                <div className=" text-background-foregroundL dark:text-background-foregroundD  text-[15px] font-medium inline-block w-full text-left leading-[1]">
                  Google
                </div>
                <div className=" text-background-foregroundL dark:text-background-foregroundD  flex items-center justify-center ml-2 ">
                  <BsChevronRight className=" h-3 w-3 stroke-2" />
                </div>
              </div>
            </button>

            <button
              onClick={handleEMailClick}
              type="button"
              className=" relative h-[44px] flex justify-between items-center text-center max-w-full transition-colors ease-in-out duration-500 dark:hover:bg-[rgba(255,255,255,.06)] dark:bg-[rgba(255,255,255,.03)] bg-[#EEE5FD] hover:bg-[#D5CCE4]  px-4 rounded-[6px] w-full cursor-pointer"
            >
              <div className=" align-middle h-full flex w-full justify-start items-center">
                <div className=" flex items-center justify-center mr-2 ">
                  <BsFillEnvelopeFill className=" text-background-foregroundL dark:text-background-foregroundD  w-5 h-5 shrink-0 align-middle" />
                </div>
                <div className=" text-background-foregroundL dark:text-background-foregroundD  text-[15px] font-medium inline-block w-full text-left leading-[1]">
                  Email
                </div>
                <div className=" text-background-foregroundL dark:text-background-foregroundD  flex items-center justify-center ml-2 ">
                  <BsChevronRight className=" h-3 w-3 stroke-2" />
                </div>
              </div>
            </button>

            <button
              type="button"
              className=" relative h-[44px] flex justify-between items-center text-center max-w-full transition-colors ease-in-out duration-500 bg-black dark:hover:bg-[rgba(0,0,0,.4)]  px-4 rounded-[6px] w-full cursor-pointer"
            >
              <div className=" align-middle h-full flex w-full justify-start items-center">
                <div className=" flex items-center justify-center mr-2 ">
                  <BsGithub className=" w-5 h-5 shrink-0 align-middle" />
                </div>
                <div className=" text-[15px] font-medium inline-block w-full text-left leading-[1]">
                  Github
                </div>
                <div className=" flex items-center justify-center ml-2 ">
                  <BsChevronRight className=" h-3 w-3 stroke-2" />
                </div>
              </div>
            </button>

            {/* <Link href="/"> */}
            <p className="text-background-foregroundL dark:text-gray-400 underline font-semibold text-[13px] inline-flex items-center">
              Continue as a guest
            </p>
            {/* </Link> */}
          </div>

          <p className=" text-background-foregroundL text-[13px] dark:text-gray-400 text-left ">
            The use of your account is governed by these{" "}
            <Link href="/">
              <span className=" cursor-pointer whitespace-nowrap text-background-foregroundL dark:text-gray-400 font-semibold underline ">
                Terms of Use
              </span>
            </Link>
            . Your Personal Data will be processed according to our{" "}
            <Link href="/">
              <span className=" cursor-pointer whitespace-nowrap text-background-foregroundL dark:text-gray-400 font-semibold underline ">
                Privacy Policy.
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
