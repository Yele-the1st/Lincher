import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface EditHeroProps {}

const EditHero: FC<EditHeroProps> = ({}) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { data } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
  }, [data]);

  const handleUpdate = (e: any) => {};

  return (
    <div className=" mt-[80px] sm:ml-64  bg-transparent">
      <div className=" w-full 1000px:flex items-center">
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

            <h2 className=" text-6xl md:text-7xl font-semibold font-Poppins tracking-tight text-background-foregroundL dark:text-background-foregroundD ">
              {title}
            </h2>
            <p className="mt-8 max-w-sm font-light font-Poppins text-background-foregroundL dark:text-background-foregroundD ">
              {subTitle}
              {/* <strong className=" italic text-lg font-Josefin">
                LMS platform.
              </strong> */}
            </p>
          </div>
          <div className=" relative">
            <div className=" p-2 dark:bg-background-darkHover bg-accent shadow-md rounded-[16px]">
              <Image
                priority
                quality={100}
                src={image}
                alt=""
                height={1000}
                width={1000}
                className="h-full w-full rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHero;
