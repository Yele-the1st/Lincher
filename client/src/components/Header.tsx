"use client";
import { NavItems } from "@/components/NavItems";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
}

const Header: FC<HeaderProps> = ({ activeItem }) => {
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
        className=" h-16 bg-background/75 dark:bg-background-darkHover dark:border-[#1E1E1E] border text-background-foregroundL dark:text-background-foregroundD rounded-[20px] shadow-2xl pl-6 pr-3 flex items-center relative"
      >
        <Link href={`/`} className=" mr-6 max-w-full flex items-baseline">
          <Image src={`/logo/path1117.svg`} alt="logo" height={20} width={20} />
          <p className=" ml-1 font-Josefin text-xl">lincher</p>
        </Link>
        <div className=" w-full justify-end 900px:justify-between  items-baseline flex">
          <NavItems activeItem={activeItem} isMobile />

          <div>
            <ThemeToggle />
          </div>

          {/* <div className=" py-2 px-3 text-[14px] dark:bg-primary-dark rounded-[16px] font-Josefin whitespace-nowrap ">
            Sign in
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
