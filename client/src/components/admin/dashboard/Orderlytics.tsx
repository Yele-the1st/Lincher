import { FC } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
  Line,
} from "recharts";
import Loader from "@/components/Loader/Loader";
import { useGetOrdersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";

interface OrderlyticsProps {}

const Orderlytics: FC<OrderlyticsProps> = ({}) => {
  const { data, isLoading, isError } = useGetOrdersAnalyticsQuery({});

  const analyticsData: any = [];

  data &&
    data?.orders?.last12Months?.forEach((item: any) => {
      analyticsData.push({ name: item.month, count: item.count });
    });

  return (
    <div className=" w-full h-full rounded-[16px] bg-accent dark:bg-background-darkHover pt-5 p-10 items-center justify-center">
      <h1 className=" text-start text-xl font-bold text-black dark:text-white ">
        Orders Analytics
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            data={analyticsData}
            width={500}
            height={300}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#6101ee"
              // fill="#6101ee"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Orderlytics;
