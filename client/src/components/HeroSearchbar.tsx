import { FC } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

interface HeroSearchbarProps {}

const HeroSearchbar: FC<HeroSearchbarProps> = ({}) => {
  return (
    <div className=" flex items-center gap-[12px] pointer-events-auto  ">
      <div className=" w-[340px] relative flex items-center select-none">
        <div className=" text-background-foregroundL dark:only:text-background-foregroundD dark:bg-[rgba(255,255,255,.05)] bg-accent outline-none rounded-[8px] h-[56px] justify-between flex w-full relative">
          <input
            type="text"
            placeholder="Find a course..."
            className=" placeholder:font-light outline-none text-sm appearance-none py-1 px-3 w-full h-full bg-transparent min-h-[24px]  "
          />
          <div className=" mr-3 cursor-pointer flex h-full items-center">
            <div className="bg-primary rounded-[8px] px-4 py-3">
              <BiSearchAlt2 className=" text-white w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchbar;
