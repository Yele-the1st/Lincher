import { FC } from "react";
import Userlytics from "./dashboard/Userlytics";
import Orderlytics from "./dashboard/Orderlytics";
import { MdDiscount } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { Box, CircularProgress } from "@mui/material";
import AllInvoices from "./order/AllInvoices";

interface DashboardWidgetsProps {}
interface Props {
  open?: boolean;
  value?: number;
}

const CircularProgressWithLabel: FC<Props> = ({ open, value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        color={value && value > 99 ? "inherit" : "error"}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Box>
  );
};

const DashboardWidgets: FC<DashboardWidgetsProps> = ({}) => {
  return (
    <div className=" pt-5 pb-10 mt-[80px] sm:ml-64  bg-transparent">
      <div className=" px-5 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-5">
        <div className=" max-h-[340px] shrink-0 col-span-full sm:col-span-3">
          <div className=" text-center  w-full h-full">
            <Userlytics />
          </div>
        </div>
        <div className=" col-span-full sm:col-span-2">
          <div className=" w-full bg-accent dark:bg-background-darkHover rounded-[16px] shadow">
            <div className=" flex items-center p-5 justify-between">
              <div className="">
                <MdDiscount className="dark:text-primary text-[#000] w-7 h-7" />
                <h5 className=" pt-2  dark:text-white text-black text-xl">
                  120
                </h5>
                <h5 className=" py-2 font-bold dark:text-white text-black text-xl">
                  Sales obtained
                </h5>
              </div>
              <div className=" text-primary ">
                <CircularProgressWithLabel value={100} open={false} />
                <h5 className=" text-center dark:text-white text-black pt-4">
                  +120%
                </h5>
              </div>
            </div>
          </div>
          <div className=" w-full mt-5 bg-accent dark:bg-background-darkHover rounded-[16px] shadow">
            <div className=" flex items-center p-5 justify-between">
              <div className="">
                <HiMiniUsers className="dark:text-primary text-[#000] w-7 h-7" />
                <h5 className=" pt-2  dark:text-white text-black text-xl">
                  80
                </h5>
                <h5 className=" py-2 font-bold dark:text-white text-black text-xl">
                  New Users
                </h5>
              </div>
              <div className=" text-primary ">
                <CircularProgressWithLabel value={100} open={false} />
                <h5 className=" text-center dark:text-white text-black pt-4">
                  +80%
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-h-[380px] shrink-0 col-span-full sm:col-span-3">
          <div className=" text-center w-full h-full">
            <Orderlytics />
          </div>
        </div>
        <div className=" col-span-full sm:col-span-2">
          <div className="p-5 rounded-[16px] bg-accent dark:bg-background-darkHover">
            <div className="  dark:text-white text-black text-xl font-bold ">
              Recent Transactions
            </div>
            <AllInvoices isDashboard={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
