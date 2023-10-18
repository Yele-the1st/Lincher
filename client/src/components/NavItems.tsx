"use client";
import Link from "next/link";
import { FC } from "react";

export const navItemsData = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

interface NavItemsProps {
  activeItem: number;
  isMobile: boolean;
}

export const NavItems: FC<NavItemsProps> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 1100px:flex relative font-Josefin font-bold  items-center justify-start gap-x-1">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? " dark:bg-accent-dark bg-accent "
                    : " bg-inherit "
                } hover:bg-accent transition-colors duration-300 ease-in-out  dark:hover:bg-accent-hover rounded-[8px] py-2 px-3 justify-start items-center mr-0  text-[14px] flex static`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="flex 900px:hidden mt-5">
          <div className=" w-full text-center py-6">
            {navItemsData &&
              navItemsData.map((i, index) => (
                <Link href={`${i.url}`} key={index} passHref>
                  <div className="block">
                    <div
                      className={`${
                        activeItem === index
                          ? " dark:bg-accent-dark bg-accent "
                          : " bg-inherit "
                      } hover:bg-gray-50 transition-colors duration-300 ease-in-out  dark:hover:bg-accent-hover py-2 px-3 justify-start items-center mr-0  text-[14px] flex static`}
                    >
                      <button className=" mb-2 h-[32px] relative flex justify-between items-center text-center max-w-full bg-transparent rounded-[8px] font-bold text-[15px] w-auto cursor-pointer ">
                        <div className=" h-full flex items-center justify-center w-full ">
                          <div className=" text-background-foregroundL dark:text-background-foregroundD w-full leading-[1] ">
                            {i.name}
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className=" m-0 w-full ">
                      <hr className=" h-[1px] bg-accent dark:bg-accent-dark" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
