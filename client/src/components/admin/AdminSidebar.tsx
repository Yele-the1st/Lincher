import Image from "next/image";
import Link from "next/link";
import { FC, SetStateAction, useState } from "react";
import {
  IoAnalyticsSharp,
  IoDocumentAttach,
  IoDuplicate,
  IoLogOut,
  IoMenu,
  IoVideocam,
} from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FaFileInvoice } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {
  MdAddBox,
  MdDocumentScanner,
  MdNotifications,
  MdSettings,
  MdSpaceDashboard,
} from "react-icons/md";
import { BiChevronDown, BiSolidCustomize, BiSolidVideos } from "react-icons/bi";
import { FaFileVideo, FaUsersCog } from "react-icons/fa";
import { AiFillCaretDown, AiFillPicture } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { IoMdAnalytics } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { ThemeToogle } from "../Navigation/ThemeToogle";
import Notification from "./DashboardHeader";
import DashboardHeader from "./DashboardHeader";

interface AdminSidebarProps {
  activeT: number;
  selectedT: number;
  header: string;
}

const AdminSidebar: FC<AdminSidebarProps> = ({
  activeT,
  selectedT,
  header,
}) => {
  const [asideIsShown, setAsideIsShown] = useState(true);
  const { user } = useSelector((state: any) => state.auth);
  const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(activeT);
  const [selectedTab, setSelectedTab] = useState(selectedT);

  const toggleTab = (tab: SetStateAction<number>) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  // https://www.youtube.com/embed/W6NZfCO5SIk?si=VLqpHKgCQdW2C1XS

  const asideHandler = () => {
    setAsideIsShown(true);
    if (asideIsShown) {
      setAsideIsShown(false);
    }
  };
  return (
    <div className=" overflow-hidden w-full  text-background-foregroundL dark:text-background-foregroundD">
      <nav className="fixed top-0 z-50 w-full overflow-hidden bg-background dark:bg-background-dark   flex items-center justify-between ">
        <div className=" w-full sm:w-64 shadow-none  border-r border-b  border-gray-200 dark:border-[#3C4043] bg-accent dark:bg-background-darkHover px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={asideHandler}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden dark:hover:bg-accent-hover  focus:outline-none focus:ring-2 dark:focus:ring-accent-hover/80 focus:ring-accent-hover/10"
              >
                <span className="sr-only">Open sidebar</span>
                <IoMenu className={`w-6 h-6`} />
              </button>
              <Link
                href={`/`}
                className=" ml-2 mr-6 max-w-full flex items-baseline"
              >
                <Image
                  src={`/logo/path1117.svg`}
                  alt="logo"
                  height={20}
                  width={20}
                />
                <p className=" ml-1 font-Josefin text-xl">lincher</p>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className=" flex items-center">
                  <div className=" flex items-center mt-1 mr-2 sm:hidden">
                    <ThemeToogle />
                    <div className="relative flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-2 px-3">
                      <MdNotifications
                        className={` w-5 h-5 text-black dark:text-white`}
                      />
                      <span className=" absolute -top-1 -right-1 bg-primary rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white ">
                        3
                      </span>
                    </div>
                  </div>
                  <span className="sr-only">Open user menu</span>
                  <Link href={`/profile`}>
                    <div
                      className={` cursor-pointer hover:bg-accent items-center  dark:hover:bg-accent-hover  rounded-[8px] py-2 px-3 `}
                    >
                      {user?.avatar?.url ? (
                        <Image
                          src={user?.avatar?.url}
                          alt=""
                          height={30}
                          width={30}
                          className={`cursor-pointer w-8 h-8 object-cover overflow-hidden rounded-full`}
                          loading="eager"
                        />
                      ) : (
                        <PiUserCircleFill
                          size={25}
                          className="cursor-pointer dark:text-background-foregroundD text-background-foregroundL "
                        />
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden shadow-m flex-1 sm:flex px-7 py-3 lg:px-7  ">
          <div className=" flex items-center text-3xl font-bold ">{header}</div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform pt-20 dark:bg-background-darkHover bg-accent border-r border-gray-200 dark:border-[#3C4043] ${
          asideIsShown ? "-translate-x-full" : null
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-background-darkHover bg-accent ">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="group flex items-center p-2 text-base font-normal dark:text-gray-100 rounded-[16px] hover:bg-background  dark:hover:bg-accent-hover"
              >
                <MdSpaceDashboard
                  className={` w-6 h-6  transition duration-75`}
                />
                <span className="ml-3 font-poppins transition duration-75">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <div
                onClick={() => toggleTab(1)}
                className={`group flex cursor-pointer justify-between items-center p-2 text-base font-normal dark:text-gray-100 hover:bg-background   dark:hover:bg-accent-hover ${
                  activeTab === 1
                    ? " bg-background dark:bg-accent-hover rounded-t-[16px] "
                    : " rounded-[16px] "
                } `}
              >
                <div className=" flex items-center">
                  <FaDatabase className={` w-6 h-6 transition duration-75`} />
                  <span className="ml-3 font-poppins transition duration-75">
                    Data
                  </span>
                </div>
                <div>
                  <BiChevronDown className={`w-6 h-6`} />
                </div>
              </div>
              {activeTab === 1 && (
                <div className="">
                  <div
                    onClick={() => setSelectedTab(1)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 ${
                      selectedTab === 1
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <HiUsers className={` w-6 h-6 transition duration-75 `} />
                    <span className="ml-3 font-poppins transition duration-75">
                      Users
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectedTab(2)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 rounded-b-[16px] ${
                      selectedTab === 2
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <FaFileInvoice
                      className={` w-6 h-6 transition duration-75`}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Invoices
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={() => toggleTab(2)}
                className={`group cursor-pointer flex justify-between items-center p-2 text-base font-normal dark:text-gray-100 hover:bg-background  dark:hover:bg-accent-hover ${
                  activeTab === 2
                    ? "bg-background dark:bg-accent-hover rounded-t-[16px] "
                    : " rounded-[16px] "
                } `}
              >
                <div className=" flex items-center">
                  <BiSolidVideos
                    className={` w-6 h-6  transition duration-75`}
                  />
                  <span className="ml-3 font-poppins transition duration-75">
                    Content
                  </span>
                </div>
                <div>
                  <BiChevronDown className={`w-6 h-6`} />
                </div>
              </div>
              {activeTab === 2 && (
                <div className="">
                  <Link
                    href={`/admin/create-course`}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 ${
                      selectedTab === 3
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <FaFileVideo
                      className={` w-6 h-6 transition duration-75 `}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Create Courses
                    </span>
                  </Link>
                  <Link
                    href={`/admin/courses`}
                    // onClick={() => setSelectedTab(1)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 rounded-b-[16px] ${
                      selectedTab === 4
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <IoVideocam className={` w-6 h-6 transition duration-75`} />
                    <span className="ml-3 font-poppins transition duration-75">
                      Live Courses
                    </span>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={() => toggleTab(3)}
                className={`group cursor-pointer flex justify-between items-center p-2 text-base font-normal dark:text-gray-100 hover:bg-background   dark:hover:bg-accent-hover ${
                  activeTab === 3
                    ? "bg-background dark:bg-accent-hover rounded-t-[16px] "
                    : " rounded-[16px] "
                } `}
              >
                <div className=" flex items-center">
                  <BiSolidCustomize
                    className={` w-6 h-6  transition duration-75`}
                  />
                  <span className="ml-3 font-poppins transition duration-75">
                    Customization
                  </span>
                </div>
                <div>
                  <BiChevronDown className={`w-6 h-6`} />
                </div>
              </div>
              {activeTab === 3 && (
                <div className="">
                  <div
                    onClick={() => setSelectedTab(4)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 ${
                      selectedTab === 4
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <AiFillPicture
                      className={` w-6 h-6 transition duration-75 `}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Hero
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectedTab(5)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 ${
                      selectedTab === 5
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <IoDocumentAttach
                      className={` w-6 h-6 transition duration-75`}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Faq
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectedTab(6)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 rounded-b-[16px] ${
                      selectedTab === 6
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <IoDuplicate
                      className={` w-6 h-6 transition duration-75`}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Categories
                    </span>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/"
                className="group flex items-center p-2 text-base font-normal dark:text-gray-100 rounded-[16px] hover:bg-background   dark:hover:bg-accent-hover "
              >
                <FaUsersCog className={` w-6 h-6  transition duration-75`} />
                <span className="ml-3 font-poppins transition duration-75">
                  Manage Teams
                </span>
              </Link>
            </li>

            <li className=" pb-10">
              <div
                onClick={() => toggleTab(4)}
                className={`group cursor-pointer flex justify-between items-center p-2 text-base font-normal dark:text-gray-100 hover:bg-background   dark:hover:bg-accent-hover ${
                  activeTab === 4
                    ? "bg-background dark:bg-accent-hover rounded-t-[16px] "
                    : " rounded-[16px] "
                } `}
              >
                <div className=" flex items-center">
                  <IoMdAnalytics
                    className={` w-6 h-6  transition duration-75`}
                  />
                  <span className="ml-3 font-poppins transition duration-75">
                    Analytics
                  </span>
                </div>
                <div>
                  <BiChevronDown className={`w-6 h-6`} />
                </div>
              </div>
              {activeTab === 4 && (
                <div className="">
                  <div
                    onClick={() => setSelectedTab(7)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 ${
                      selectedTab === 7
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <SiGoogleanalytics
                      className={` w-6 h-6 transition duration-75 `}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Course Analytics
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectedTab(8)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 ${
                      selectedTab === 8
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <MdDocumentScanner
                      className={` w-6 h-6 transition duration-75`}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      Order Analytics
                    </span>
                  </div>
                  <div
                    onClick={() => setSelectedTab(9)}
                    className={` group flex items-center p-2 text-base font-normal cursor-pointer  hover:shadow-xl dark:text-gray-100 rounded-b-[16px] ${
                      selectedTab === 9
                        ? " bg-primary"
                        : "bg-background dark:bg-accent-hover dark:hover:bg-background-darkHover hover:bg-accent "
                    } `}
                  >
                    <IoAnalyticsSharp
                      className={` w-6 h-6 transition duration-75`}
                    />
                    <span className="ml-3 font-poppins transition duration-75">
                      User Analytics
                    </span>
                  </div>
                </div>
              )}
            </li>

            <div className=" cursor-pointer pt-2 border-t">
              <div className="group flex items-center p-2 text-base font-normal dark:text-gray-100 rounded-[16px] hover:bg-background   dark:hover:bg-accent-hover ">
                <MdSettings className={` w-6 h-6  transition duration-75`} />
                <span className="ml-3 font-poppins transition duration-75">
                  Settings
                </span>
              </div>
            </div>
            <div className=" pb-10 cursor-pointer">
              <div className="group flex items-center p-2 text-base font-normal dark:text-gray-100 rounded-[16px] hover:bg-background   dark:hover:bg-accent-hover ">
                <IoLogOut className={` w-6 h-6  transition duration-75`} />
                <span className="ml-3 font-poppins transition duration-75">
                  Logout
                </span>
              </div>
            </div>

            <div className="max-w-sm p-4 bg-background dark:bg-accent-hover rounded-lg shadow  ">
              <div className=" bg-[#F0F5F8] p-0.5 max-w-fit mb-2 rounded-md">
                <MdAddBox className={` text-primary w-8 h-8`} />
              </div>

              <h5 className="mb-2 text-xl font-semibold tracking-tight dark:text-gray-100  ">
                Request a new Course
              </h5>

              <p className="mb-3 font-normal text-sm dark:text-gray-400  ">
                Do you need a tool that we are missing or one that you think
                write.ai could be good at?
              </p>
              <div className="inline-flex text-sm items-center hover:underline">
                lets grow together
                <HiExternalLink className={`w-5 h-5 ml-2`} />
              </div>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
