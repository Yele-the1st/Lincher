"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

import { FC } from "react";

interface ThemeToogleProps {}

export const ThemeToogle: FC<ThemeToogleProps> = ({}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {theme === "light" ? (
        <div
          onClick={() => setTheme("dark")}
          className="flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-2 px-3"
        >
          <BiMoon classname="cursor-pointer" fill="black" size={20} />
        </div>
      ) : (
        <div
          onClick={() => setTheme("light")}
          className="flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-2 px-3"
        >
          <BiSun classname="cursor-pointer" size={20} />
        </div>
      )}
    </div>
  );
};
