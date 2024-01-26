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

interface OrdersAnalyticsProps {}

const OrdersAnalytics: FC<OrdersAnalyticsProps> = ({}) => {
  const { data, isLoading, isError } = useGetOrdersAnalyticsQuery({});

  // const analyticsData = [
  //   { name: "Jun 2023", count: 3 },
  //   { name: "July 2023", count: 2 },
  //   { name: "August 2023", count: 5 },
  //   { name: "Sept 2023", count: 7 },
  //   { name: "October 2023", count: 2 },
  //   { name: "Nov 2023", count: 5 },
  //   { name: "December 2023", count: 7 },
  // ];

  const analyticsData: any = [];

  data &&
    data?.orders?.last12Months?.forEach((item: any) => {
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
              Orders Analytics
            </h1>
            <p className="">Last 12 months analytics data</p>
          </div>
          <div className=" w-full h-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="50%">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersAnalytics;
