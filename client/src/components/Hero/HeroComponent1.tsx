import { FC } from "react";

interface HeroComponent1Props {}

const HeroComponent1: FC<HeroComponent1Props> = ({}) => {
  return (
    <div className="bg-[#191A1D] w-[220px] relative p-3 rounded-[20px] select-none">
      <ul className=" m-0 p-0 list-none">
        <li className=" cursor-pointer hover:bg-[#212225] text-[12px] leading-4 rounded-[20px] transition-shadow duration-200 ease-linear ">
          <div className=" flex items-center py-[6px] pr-[6px] pl-[10px]">
            <svg
              className=" opacity-60 text-white flex-shrink-0 translate-y-[-1px]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 13.5V6.4924C14.5 6.18193 14.3558 5.88907 14.1097 5.69978L8.60971 1.46901C8.25026 1.19251 7.74974 1.19251 7.39029 1.46901L1.89029 5.69978C1.6442 5.88907 1.5 6.18193 1.5 6.4924V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H9.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5Z"
                stroke="white"
              ></path>
              <path
                d="M10.5 15V9.5C10.5 8.94772 10.0523 8.5 9.5 8.5H6.5C5.94772 8.5 5.5 8.94772 5.5 9.5V15"
                stroke="white"
              ></path>
            </svg>
            <span className=" leading-[20px] flex-grow ml-2 box-border ">
              Dashboard
            </span>
          </div>
        </li>
        <li className=" cursor-pointer hover:bg-[#212225] text-[12px] leading-4 rounded-[20px] transition-shadow duration-200 ease-linear ">
          <div className=" flex items-center py-[6px] pr-[6px] pl-[10px]">
            <svg
              className=" opacity-60 text-white flex-shrink-0 translate-y-[-1px]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.98968 8.21795C3.62305 8.58411 3.34229 9.0271 3.16768 9.51495L1.56768 13.996C1.54332 14.0641 1.5384 14.1377 1.55348 14.2085C1.56856 14.2793 1.60304 14.3445 1.65307 14.3968C1.70309 14.4491 1.76668 14.4864 1.83673 14.5047C1.90677 14.5229 1.9805 14.5212 2.04968 14.5L5.90268 13.314C6.44842 13.1462 6.94485 12.8475 7.34868 12.444L13.9387 5.85395C14.1166 5.6762 14.2577 5.46513 14.354 5.2328C14.4503 5.00047 14.4999 4.75144 14.4999 4.49995C14.4999 4.24846 14.4503 3.99943 14.354 3.7671C14.2577 3.53478 14.1166 3.3237 13.9387 3.14595L12.8537 2.06095C12.6759 1.88304 12.4648 1.74191 12.2325 1.64561C12.0002 1.54932 11.7512 1.49976 11.4997 1.49976C11.2482 1.49976 10.9992 1.54932 10.7668 1.64561C10.5345 1.74191 10.3234 1.88304 10.1457 2.06095L3.98968 8.21795Z"
                stroke="white"
              ></path>
              <path
                d="M9.5 3.5L12.5 6.5"
                stroke="white"
                strokeLinecap="square"
              ></path>
            </svg>
            <span className=" leading-[20px] flex-grow ml-2 box-border ">
              My courses
            </span>
          </div>
        </li>
        <li className=" cursor-pointer hover:bg-[#212225] text-[12px] leading-4 rounded-[20px] transition-shadow duration-200 ease-linear ">
          <div className=" flex items-center py-[6px] pr-[6px] pl-[10px]">
            <svg
              className=" opacity-60 text-white flex-shrink-0 translate-y-[-1px]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_1167_51912" fill="white">
                <path d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3Z"></path>
              </mask>
              <path
                d="M3 2H13V0H3V2ZM14 3V13H16V3H14ZM13 14H3V16H13V14ZM2 13V3H0V13H2ZM3 14C2.44772 14 2 13.5523 2 13H0C0 14.6569 1.34315 16 3 16V14ZM14 13C14 13.5523 13.5523 14 13 14V16C14.6569 16 16 14.6569 16 13H14ZM13 2C13.5523 2 14 2.44772 14 3H16C16 1.34315 14.6569 0 13 0V2ZM3 0C1.34315 0 0 1.34315 0 3H2C2 2.44772 2.44772 2 3 2V0Z"
                fill="white"
                mask="url(#path-1-inside-1_1167_51912)"
              ></path>
              <path
                d="M6.5 1.5V14.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.5 6.5H6.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className=" leading-[20px] flex-grow ml-2 box-border ">
              Library
            </span>
          </div>
        </li>
        <li className=" cursor-pointer hover:bg-[#212225] text-[12px] leading-4 rounded-[20px] transition-shadow duration-200 ease-linear ">
          <div className=" flex items-center py-[6px] pr-[6px] pl-[10px]">
            <svg
              className=" opacity-60 text-white flex-shrink-0 translate-y-[-1px]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.814121 12.5463C0.662521 12.4506 0.577024 12.2764 0.605981 12.0995C0.987636 9.76787 2.82461 8 5.03319 8C7.2417 8 9.07862 9.76775 9.46036 12.0993C9.48932 12.2761 9.40386 12.4504 9.25231 12.546C8.94009 12.7431 8.52366 12.5171 8.45613 12.1541C8.10903 10.2884 6.6371 9 5.03319 9C3.42922 9 1.95721 10.2885 1.61017 12.1543C1.54266 12.5173 1.12634 12.7433 0.814121 12.5463Z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.03319 8C6.13776 8 7.03292 7.10457 7.03292 6C7.03292 4.89543 6.13749 4 5.03292 4C3.92835 4 3.03292 4.89543 3.03292 6C3.03292 7.10457 3.92862 8 5.03319 8ZM5.03319 9C6.69005 9 8.03292 7.65685 8.03292 6C8.03292 4.34315 6.68978 3 5.03292 3C3.37607 3 2.03292 4.34315 2.03292 6C2.03292 7.65685 3.37634 9 5.03319 9Z"
              ></path>
              <path d="M10.5237 7.97664C10.2066 7.92786 9.84746 8.14164 9.81481 8.4608C9.78067 8.79455 10.1176 9.06645 10.4504 9.02412C10.5758 9.00816 10.7026 9 10.8303 9C12.4342 9 13.9061 10.2884 14.2533 12.1541C14.3208 12.5171 14.7372 12.7431 15.0494 12.546C15.2009 12.4504 15.2864 12.2762 15.2575 12.0994C14.9855 10.4382 13.9749 9.06319 12.6174 8.40982C13.3534 7.86312 13.8302 6.98725 13.8302 6C13.8302 4.34315 12.4871 3 10.8302 3C10.2674 3 9.74083 3.15497 9.29077 3.42457C9.11511 3.5298 9.06395 3.75051 9.14523 3.93846C9.27357 4.23521 9.6799 4.33199 9.97185 4.19305C10.2319 4.06927 10.523 4 10.8302 4C11.9348 4 12.8302 4.89543 12.8302 6C12.8302 7.10457 11.9348 8 10.8303 8C10.726 8 10.6236 7.99202 10.5237 7.97664Z"></path>
            </svg>
            <span className=" leading-[20px] flex-grow ml-2 box-border ">
              <div className=" relative flex items-center justify-between whitespace-nowrap ">
                {" "}
                Hall of fame{" "}
                <div className=" py-[2px] px-[6px] rounded-[4px] text-[11px] leading-4 text-white font-semibold bg-primary-dark ">
                  New!
                </div>
              </div>
            </span>
          </div>
        </li>
        <li className=" cursor-pointer hover:bg-[#212225] text-[12px] leading-4 rounded-[20px] transition-shadow duration-200 ease-linear ">
          <div className=" flex items-center py-[6px] pr-[6px] pl-[10px]">
            <svg
              className=" opacity-60 text-white flex-shrink-0 translate-y-[-1px]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z"
                stroke="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.12598 11.5C4.21516 9.98592 5.9924 9 7.99991 9C10.0074 9 11.7847 9.98595 12.8739 11.5C12.6718 11.7809 12.446 12.0437 12.1995 12.2853C11.3086 10.91 9.76054 10 7.99991 10C6.2393 10 4.69123 10.91 3.80036 12.2853C3.55383 12.0436 3.32806 11.7809 3.12598 11.5Z"
                fill="white"
              ></path>
              <circle cx="8" cy="7" r="2.5" stroke="white"></circle>
            </svg>
            <span className=" leading-[20px] flex-grow ml-2 box-border ">
              My Profile
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeroComponent1;
