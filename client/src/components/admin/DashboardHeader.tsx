import { FC, useState } from "react";
import { MdNotifications } from "react-icons/md";
import { ThemeToogle } from "../Navigation/ThemeToogle";

interface DashboardHeaderProps {}

const DashboardHeader: FC<DashboardHeaderProps> = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" z-[60] hidden sm:flex items-center justify-end py-4 px-6 fixed top-0 right-0 ">
      <ThemeToogle />
      <div
        onClick={() => setOpen(!open)}
        className="relative flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-2 px-3"
      >
        <MdNotifications className={` w-5 h-5 text-black dark:text-white`} />
        <span className=" absolute -top-1 -right-1 bg-primary rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white ">
          3
        </span>
      </div>
      {open && (
        <div className=" text-xs w-[350px] h-[50vh] dark:bg-background-darkHover bg-accent shadow-xl absolute top-16 z-10 rounded-[8px] ">
          <h5 className=" text-center text-lg font-Poppins text-background-foregroundL dark:text-background-foregroundD p-3">
            Notifications
          </h5>
          <div className="  dark:bg-accent-hover bg-background font-Poppins border-b dark:border-b-accent-dark border-b-[#0000000f] ">
            <div className=" w-full flex items-center justify-between p-2">
              <p className=" text-black text-sm dark:text-white">
                New Question Received
              </p>
              <p className=" text-black text-sm dark:text-white cursor-pointer">
                Mark as read
              </p>
            </div>
            <p className=" px-2 text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum
              ullam reiciendis unde vel ut. Vero vitae cupiditate autem tempore
              nostrum magnam, quia, nobis nesciunt, repudiandae nam possimus.
              Sed, saepe.
            </p>
            <p className=" p-2 text-black dark:text-white">5 days ago</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
