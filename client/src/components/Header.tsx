"use client";
import { NavItems } from "@/components/NavItems";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ThemeToogle } from "./ThemeToogle";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";
import HeaderSidebar from "./HeaderSidebar";
import CustomModal from "../components/CustomModal";
import AuthModal from "./auth/AuthModal";
import SignInModal from "./auth/SignInModal";
import SignUpModal from "./auth/SignUpModal";
import VerificationModal from "./auth/VerificationModal";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}

const Header: FC<HeaderProps> = ({
  activeItem,
  setOpen,
  route,
  open,
  setRoute,
}) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [scrollWidth, setScrollWidth] = useState("100%"); // Initial width

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Define the starting width, width reduction per scroll, and the minimum width
      const initialWidth = 100; // Adjust as needed
      const widthReductionPerScroll = 0.05; // Adjust as needed
      const minWidth = 60; // Adjust as needed

      // Calculate the new width
      let newWidth = initialWidth - scrollY * widthReductionPerScroll;

      // Ensure the width doesn't go below the minimum width
      newWidth = Math.max(minWidth, newWidth);

      // Convert the width to Tailwind CSS format
      const tailwindWidth = newWidth + "%";

      // Update the state with the new width
      setScrollWidth(tailwindWidth);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` w-full z-[99] w- h-[90px] flex flex-col justify-end items-center px-6 fixed top-0`}
    >
      <div
        style={{ width: `${scrollWidth}`, minWidth: "360px" }}
        className=" h-16 backdrop-blur-md bg-background/75 dark:bg-background-darkHover dark:border-[#1E1E1E] border text-background-foregroundL dark:text-background-foregroundD rounded-[16px] shadow-2xl pl-6 pr-3 flex items-center relative"
      >
        <Link href={`/`} className=" mr-6 max-w-full flex items-baseline">
          <Image src={`/logo/path1117.svg`} alt="logo" height={20} width={20} />
          <p className=" ml-1 font-Josefin text-xl">lincher</p>
        </Link>
        <div className=" w-full justify-end 1100px:justify-between  items-center flex">
          <NavItems activeItem={activeItem} isMobile={false} />

          <div className=" flex items-center">
            <ThemeToogle />
            {/* only for Mobile screens */}
            <div className="800px:hidden hover:bg-accent  dark:hover:bg-accent-hover  rounded-[8px] py-2 px-3">
              <HiOutlineMenuAlt3
                size={20}
                className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
                onClick={() => setOpenSidebar(true)}
              />
            </div>
            <div
              onClick={() => setOpen(true)}
              className=" hidden cursor-pointer 800px:flex hover:bg-accent items-center  dark:hover:bg-accent-hover  rounded-[8px] py-2 px-3"
            >
              <PiUserCircleFill
                size={25}
                className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
              />
              <p className=" ml-1 text-[15px] pt-1 font-Josefin font-bold whitespace-nowrap ">
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
      {openSidebar && (
        <HeaderSidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          activeItem={activeItem}
        />
      )}
      {route === "Auth" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={AuthModal}
            />
          )}
        </>
      )}
      {route === "Sign-In" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignInModal}
            />
          )}
        </>
      )}
      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUpModal}
            />
          )}
        </>
      )}
      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={VerificationModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
