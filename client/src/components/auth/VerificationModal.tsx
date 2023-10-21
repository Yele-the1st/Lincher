import { FC, useEffect } from "react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { IoReloadSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useActivationMutation } from "@/redux/features/auth/authApi";

interface VerificationModalProps {
  scroll: boolean;
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
}

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const VerificationModal: FC<VerificationModalProps> = ({
  scroll,
  setOpen,
  setRoute,
}) => {
  const { token } = useSelector((state: any) => state.auth);
  const [activation, { isLoading, isSuccess, error }] = useActivationMutation();
  const [InvalidError, setInvalidError] = useState<boolean>(false);
  const [limitText, setLimitText] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      setRoute("Sign-In");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occured in activation:", error);
      }
    }
  }, [error, isSuccess, setRoute]);

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }
    await activation({
      activation_token: token,
      activation_code: verificationNumber,
    });
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) {
      // If the value is longer than 1 character, truncate it to a single character
      value = value[0];
    }

    setInvalidError(false);

    // Update the input field value
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "") {
      // If the value is empty and backspace is pressed, focus on the previous input field
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    } else if (value.length === 1) {
      // If a single character is entered, focus on the next input field if it's not the last one
      if (index < Object.keys(verifyNumber).length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  // handleClose function
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
                  className=" fill-black dark:fill-white w-5 h-5 shrink-0 align-middle "
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
              className=" w-full object-contain h-full "
              src="/assets/Mail-bro.svg"
              alt="The 3D journey starts here"
              width={400}
              height={200}
              priority
              quality={100}
            />
          </div>
          <div className=" px-8 mt-4">
            <h1 className=" text-[22px] text-center text-background-foregroundL dark:text-background-foregroundD font-semibold sm:text-[28px] sm:font-bold">
              Verify your email
            </h1>
          </div>
        </div>
        <div className=" -mt-1 rounded-b-none sm:rounded-b-[9px] py-6 px-4 sm:py-[16px] sm:px-[32px] w-full bg-background dark:bg-[#191a1d] pb-10  ">
          <p className=" text-[16px] text-background-foregroundL dark:text-background-foregroundD  font-light leading-[24px] mb-2 text-center ">
            Please enter the 4 digit code sent to your email
          </p>
          <div className=" w-full mt-4 flex items-center justify-center space-x-4">
            {Object.keys(verifyNumber).map((key, index) => (
              <input
                type="number"
                key={key}
                ref={inputRefs[index]}
                className={` w-[40px] h-[40px] bg-transparent text-[18px] outline-none font-Poppins text-center  rounded-xl shadow-sm flex items-center text-black dark:text-white justify-center ${
                  InvalidError
                    ? " animate-shake ring-2 ring-red-500"
                    : "ring-1 dark:ring-gray-300 ring-gray-400 "
                } `}
                placeholder=""
                maxLength={1}
                value={verifyNumber[key as keyof VerifyNumber]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Backspace" && e.currentTarget.value === "") {
                    e.preventDefault(); // Prevent the default backspace behavior
                    handleInputChange(index, ""); // Handle backspace as if a value was cleared
                  }
                }}
              />
            ))}
          </div>
          <div className=" cursor-pointer w-full mt-6 text-primary space-x-1 dark:text-white justify-center flex items-center">
            <IoReloadSharp classname=" w-5 h-5 " />
            <p className=" text-primary dark:text-white font-Poppins text-sm font-light">
              Resend
            </p>
          </div>
          {isLoading ? (
            <div className=" mt-6 w-full px-[80px] p-3 flex justify-center items-center overflow-hidden box-border">
              <div className=" justify-center flex items-center">
                <div className=" w-2 h-2 rounded-full mr-1.5 bg-indigo-600 animate-loading"></div>
                <div
                  style={{ animationDelay: "0.1s" }}
                  className=" w-2 h-2 rounded-full mr-1.5 bg-indigo-600 animate-loading"
                ></div>
                <div
                  style={{ animationDelay: "0.2s" }}
                  className=" w-2 h-2 rounded-full mr-1.5 bg-indigo-600 animate-loading"
                ></div>
              </div>
            </div>
          ) : (
            <div className=" w-full mt-6 flex justify-center">
              <button
                className={` h-[44px] cursor-pointer items-center flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `}
                onClick={verificationHandler}
              >
                Verify OTP
              </button>
            </div>
          )}
          <p className="mt-6 text-center font-Poppins font-light text-sm dark:text-white text-gray-900">
            Go back to sign in?{" "}
            <span
              onClick={() => setRoute("Sign-In")}
              className="font-semibold cursor-pointer leading-6 underline text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
