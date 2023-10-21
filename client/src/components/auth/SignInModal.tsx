import { FC, useEffect } from "react";
import Image from "next/image";
import React, { useState } from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { style } from "@/styles/style";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

interface SignInModalProps {
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

const SignInModal: FC<SignInModalProps> = ({ scroll, setOpen, setRoute }) => {
  const handleClose = () => {
    setOpen(false);
    setRoute("Auth");
  };
  const [show, setShow] = useState(false);
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully!");
      setOpen(false);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [error, isSuccess, setOpen]);

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
        <div className=" -mt-1 rounded-b-none sm:rounded-b-[9px] py-6 px-4 sm:py-[16px] sm:px-[32px] w-full bg-background dark:bg-[#191a1d] pb-10  ">
          {/* <p className=" text-[16px] text-background-foregroundL dark:text-background-foregroundD  font-bold leading-[24px] mb-2 text-left ">
            Login with your email
          </p> */}
          <div className="  gap-3 flex flex-col items-center w-full mb-4 ">
            <form className=" space-y-4 w-full" onSubmit={handleSubmit}>
              <div>
                <label className={`${style.label} hidden `}>
                  Email address
                </label>
                <div className="mt-2">
                  <div
                    className={` ${
                      errors.email && touched.email && "ring-red-500"
                    } flex rounded-md h-[44px] shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`}
                  >
                    <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                      <BsEnvelopeFill classname=" h-6 w-6" />
                    </span>
                    <input
                      type="email"
                      name=""
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="loginmail@gmail.com"
                      className={`block flex-1 border-0 bg-transparent w-full h-full py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 `}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <span className=" text-red-500 text-xs pt-2 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className={`${style.label} hidden `}>Password</label>
                <div className="mt-2">
                  <div
                    className={` ${
                      errors.password && touched.password && "ring-red-500"
                    } flex rounded-md h-[44px] shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`}
                  >
                    <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                      <BiSolidLockAlt classname=" h-6 w-6" />
                    </span>
                    <input
                      type={!show ? "password" : "text"}
                      name=""
                      value={values.password}
                      onChange={handleChange}
                      id="password"
                      placeholder="password"
                      className={`block flex-1 border-0 bg-transparent w-full h-full py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 `}
                    />
                    {!show ? (
                      <span
                        onClick={() => setShow(true)}
                        className="flex cursor-pointer select-none items-center px-3 dark:text-background-foregroundD text-gray-900"
                      >
                        <FaEye classname=" h-6 w-6" />
                      </span>
                    ) : (
                      <span
                        onClick={() => setShow(false)}
                        className="flex select-none cursor-pointer items-center px-3 dark:text-background-foregroundD text-gray-900"
                      >
                        <FaEyeSlash classname=" h-6 w-6" />
                      </span>
                    )}
                  </div>

                  {errors.password && touched.password && (
                    <span className=" text-red-500 text-xs pt-2 block">
                      {errors.password}
                    </span>
                  )}
                </div>
              </div>
              {isLoading ? (
                <div className=" w-full px-[80px] p-3 flex justify-center items-center overflow-hidden box-border">
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
                <div className=" w-full mt-5">
                  <input
                    type="submit"
                    value="Login"
                    className={` h-[44px] cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  />
                </div>
              )}
            </form>
            <p className="mt-6 text-center font-Josefin text-sm text-gray-500">
              Not a member?{" "}
              <span
                onClick={() => setRoute("Sign-Up")}
                className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
