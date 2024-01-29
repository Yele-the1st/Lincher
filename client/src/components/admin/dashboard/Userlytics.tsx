import { FC } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Loader from "@/components/Loader/Loader";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";

interface UserlyticsProps {}

const Userlytics: FC<UserlyticsProps> = ({}) => {
  const { data, isLoading, isError } = useGetUsersAnalyticsQuery({});

  const analyticsData: any = [];

  data &&
    data?.users?.last12Months?.forEach((item: any) => {
      analyticsData.push({ name: item.month, count: item.count });
    });

  return (
    <div className=" w-full h-full rounded-[16px] bg-accent dark:bg-background-darkHover pt-5 p-10 items-center justify-center">
      <h1 className=" text-start text-xl font-bold text-black dark:text-white ">
        Users Analytics
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          data={analyticsData}
        >
          <XAxis dataKey="name" />

          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#6101ee"
            fill="#6101ee"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Userlytics;
