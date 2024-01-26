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

interface UsersAnalyticsProps {}

const UsersAnalytics: FC<UsersAnalyticsProps> = ({}) => {
  const { data, isLoading, isError } = useGetUsersAnalyticsQuery({});

  const analyticsData: any = [];

  data &&
    data?.users?.last12Months?.forEach((item: any) => {
      analyticsData.push({ name: item.month, count: item.count });
    });

  return (
    <div className="mt-[80px] sm:ml-64  bg-transparent">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen ">
          <div className=" px-10">
            <h1 className=" block sm:hidden text-3xl font-bold ">
              Users Analytics
            </h1>
            <p className="">Last 12 months analytics data</p>
          </div>
          <div className=" w-full h-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="50%">
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
                  stroke="#4d62d9"
                  fill="#6101ee"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersAnalytics;
