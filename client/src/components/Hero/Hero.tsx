import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import HeroComponent1 from "./HeroComponent1";
import HeroSearchbar from "./HeroSearchbar";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";

interface HeroProps {
  data: any;
}

const Hero: FC<HeroProps> = ({ data }) => {
  return (
    <div className="">
      <div className="mx-auto h-full grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className=" z-10 shadow-lg hover:animate-bounce cursor-pointer transition-all duration-500 ease-in-out absolute px-3 py-1.5 dark:bg-background-darkHover bg-accent rounded-[8px] bottom-20 right-6 text-[20px]">
            👨🏾‍🎓
          </div>
          <div className=" z-10 shadow-lg hover:animate-bounce cursor-pointer transition-all duration-500 ease-in-out absolute px-3 py-1.5 dark:bg-background-darkHover bg-accent rounded-[8px] top-8 right-16 text-[20px]">
            👨🏽‍🏫
          </div>
          <div className=" z-10 shadow-lg hover:animate-bounce cursor-pointer transition-all duration-500 ease-in-out absolute px-3 py-1.5 dark:bg-background-darkHover bg-accent rounded-[8px] top-14 left-16 text-[20px]">
            👩🏽‍🦰
          </div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-background-foregroundD bg-primary-dark ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <Link href="#" className="font-semibold">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h2 className=" text-6xl md:text-7xl font-semibold font-Poppins tracking-tight text-background-foregroundL dark:text-background-foregroundD ">
            {data?.layout?.banner?.title}
          </h2>
          <p className="mt-8 max-w-sm font-light font-Poppins text-background-foregroundL dark:text-background-foregroundD ">
            {data?.layout?.banner?.subTitle}
            {/* <strong className=" italic text-lg font-Josefin">
              LMS platform.
            </strong> */}
          </p>
          <div className=" mt-8">
            <HeroSearchbar />
          </div>
        </div>
        <div className=" relative">
          {/* <div className=" hidden md:flex absolute shadow-md -bottom-36 p-0.5 rounded-[20px] -right-6">
            <HeroComponent1 />
          </div> */}
          {data && (
            <div className=" p-2 dark:bg-background-darkHover bg-accent shadow-md rounded-[16px]">
              <Image
                priority
                quality={100}
                src={data?.layout?.banner?.image?.url}
                alt="hero image"
                height={1000}
                width={1000}
                className="h-full w-full rounded-[16px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
