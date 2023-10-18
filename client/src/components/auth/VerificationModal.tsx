import { FC } from "react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { style } from "@/styles/style";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface VerificationModalProps {
  scroll: boolean;
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const VerificationModal: FC<VerificationModalProps> = ({
  scroll,
  setOpen,
  setRoute,
}) => {
  const handleClose = () => {
    setOpen(false);
    setRoute("Auth");
  };
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
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
          <div className=" px-8 mt-4">
            <h1 className="  pr-[32px] text-[22px] text-background-foregroundL dark:text-background-foregroundD font-semibold sm:text-[28px] sm:font-bold">
              Sign in
            </h1>
          </div>
        </div>
        <div className=" -mt-1 rounded-b-none sm:rounded-b-[9px] py-6 px-4 sm:py-[16px] sm:px-[32px] w-full bg-background dark:bg-[#191a1d] pb-10  "></div>
      </div>
    </div>
  );
};

export default VerificationModal;
