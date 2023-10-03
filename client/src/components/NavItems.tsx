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
{
  /* <div className="hidden md:flex relative font-Josefin  items-center justify-start gap-x-1"> */
}
// className=" rounded-[16px] py-[14px] px-[12px] justify-start items-center mr-0  text-[14px] flex static "
// 2C2C2C 3C4043

export const NavItems: FC<NavItemsProps> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 900px:flex relative font-Josefin  items-center justify-start gap-x-1">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? " dark:bg-accent-dark bg-gray-50 "
                    : " bg-inherit "
                } hover:bg-accent-hover rounded-[16px] py-2 px-3 justify-start items-center mr-0  text-[14px] flex static`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="hidden 900px:flex mt-5">
          <div className=" w-full text-center py-6">
            {navItemsData &&
              navItemsData.map((i, index) => (
                <Link href={`${i.url}`} key={index} passHref>
                  <span
                    className={`${
                      activeItem === index
                        ? " dark:bg-accent-dark bg-gray-50 "
                        : " bg-inherit "
                    } hover:bg-accent-hover rounded-[16px] py-2 px-3 justify-start items-center mr-0  text-[14px] flex static`}
                  >
                    {i.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
