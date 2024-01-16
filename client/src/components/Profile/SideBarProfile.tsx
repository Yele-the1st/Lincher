import Image from "next/image";
import { FC } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { FaFilePen } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";

interface SideBarProfileProps {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
}

const SideBarProfile: FC<SideBarProfileProps> = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  return (
    <div className=" w-full">
      <div
        onClick={() => setActive(1)}
        className={`w-full flex items-center px-3 py-4 rounded-t-[16px] cursor-pointer ${
          active === 1
            ? " dark:bg-background-darkHover bg-accent "
            : "bg-transparent"
        }`}
      >
        {user?.avatar?.url ? (
          <Image
            src={user?.avatar?.url}
            alt=""
            height={30}
            width={30}
            className="cursor-pointer w-8 h-8 object-cover overflow-hidden  rounded-full"
            loading="eager"
          />
        ) : (
          <PiUserCircleFill
            size={25}
            className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
          />
        )}
        <h5 className=" pl-2 800px:block hidden text-sm font-Poppins dark:text-background-foregroundD text-background-foregroundL ">
          My Account
        </h5>
      </div>

      <div
        onClick={() => setActive(2)}
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2
            ? " dark:bg-background-darkHover bg-accent "
            : "bg-transparent"
        }`}
      >
        <div className={`w-8 h-8 flex rounded-md shrink-0`}>
          <div className=" w-full flex items-center justify-center">
            <FaFilePen
              size={20}
              className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
            />
          </div>
        </div>
        <h5 className=" pl-2 800px:block hidden text-sm font-Poppins dark:text-background-foregroundD text-background-foregroundL ">
          Enrolled Courses
        </h5>
      </div>
      <div
        onClick={() => setActive(3)}
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3
            ? " dark:bg-background-darkHover bg-accent "
            : "bg-transparent"
        }`}
      >
        <div className={`w-8 h-8 flex rounded-md shrink-0`}>
          <div className=" w-full flex items-center justify-center">
            <MdLibraryBooks
              size={20}
              className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
            />
          </div>
        </div>
        <h5 className=" pl-2 800px:block hidden text-sm font-Poppins dark:text-background-foregroundD text-background-foregroundL ">
          Library
        </h5>
      </div>
      <div
        onClick={() => setActive(4)}
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 4
            ? " dark:bg-background-darkHover bg-accent "
            : "bg-transparent"
        }`}
      >
        <div className={`w-8 h-8 flex rounded-md shrink-0`}>
          <div className=" w-full flex items-center justify-center">
            <FaMedal
              size={20}
              className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
            />
          </div>
        </div>
        <h5 className=" pl-2 800px:block hidden text-sm font-Poppins dark:text-background-foregroundD text-background-foregroundL ">
          Certifications
        </h5>
      </div>
      {user.role === "admin" && (
        <Link
          href={`/admin`}
          className={`w-full flex items-center px-3 py-4 cursor-pointer ${
            active === 5
              ? " dark:bg-background-darkHover bg-accent "
              : "bg-transparent"
          }`}
        >
          <div className={`w-8 h-8 flex rounded-md shrink-0`}>
            <div className=" w-full flex items-center justify-center">
              <MdSpaceDashboard
                size={22}
                className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
              />
            </div>
          </div>
          <h5 className=" pl-2 800px:block hidden text-sm font-Poppins dark:text-background-foregroundD text-background-foregroundL ">
            Admin Dashboard
          </h5>
        </Link>
      )}
      <div
        onClick={() => logOutHandler()}
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 6
            ? " dark:bg-background-darkHover bg-accent "
            : "bg-transparent"
        }`}
      >
        <div className={`w-8 h-8 flex rounded-md shrink-0`}>
          <div className=" w-full flex items-center justify-center">
            <IoLogOut
              size={24}
              className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
            />
          </div>
        </div>
        <h5 className=" pl-2 800px:block hidden text-sm font-Poppins dark:text-background-foregroundD text-background-foregroundL ">
          Logout
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
