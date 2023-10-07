import Image from "next/image";
import { FC } from "react";

interface WelcomeModalProps {}

const WelcomeModal: FC<WelcomeModalProps> = ({}) => {
  return (
    <div className=" font-Poppins pointer-events-auto fixed top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,0.6)] select-none box-border block  ">
      <div className=" visible pointer-events-auto flex absolute items-center justify-center h-[100vh] w-full top-0 select-none box-border">
        <div className=" overflow-hidden w-[360px] flex flex-col justify-between z-[100] relative max-h-[90vh] bg-[#191a1d] backdrop-blur-[32px] rounded-[16px] visible pointer-events-auto box-border select-none   ">
          <button className=" top-6 right-6 absolute cursor-pointer z-[100] opacity-[0.4] text-center">
            <svg
              className=" align-middle cursor-pointer text-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 3.5L12.5 12.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.5 12.5L12.5 3.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div className=" p-0">
            <Image
              className=" w-full "
              src="/assets/pexels-cottonbro-studio-9669101.png"
              alt="The 3D journey starts here"
              width={400}
              height={200}
              priority
              quality={100}
            />
            <div className="text-[16px] leading-6 text-white font-semibold mt-[24px] mb-[8px] text-center">
              Your E learning journey starts here!
            </div>
            <p className=" leading-[1rem] mt-1 mb-4 text-[12px] text-center">
              Let’s go for a tour of Linchers features <br /> and controls for
              your best experience.
            </p>
          </div>
          <div className=" p-6 flex justify-center gap-2">
            <button className=" w-full px-[16px] pb-[1px] bg-[rgba(255,255,255,.03)] rounded-[8px] h-[32px] font-light text-[14px] text-[rgba(255,255,255,.4)] leading-4 whitespace-nowrap ">
              Skip
            </button>
            <button className=" w-full px-[16px] pb-[1px] bg-primary-dark shadow-custom rounded-[8px] font-Poppins font-light text-[14px] h-[32px] text-[rgba(255,255,255)] leading-4 whitespace-nowrap">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
