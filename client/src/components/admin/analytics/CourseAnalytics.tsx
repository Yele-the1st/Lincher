import { FC } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Label,
  YAxis,
  LabelList,
} from "recharts";
import Loader from "@/components/Loader/Loader";
import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";

interface CourseAnalyticsProps {}

const CourseAnalytics: FC<CourseAnalyticsProps> = ({}) => {
  const { data, isLoading, isError } = useGetCoursesAnalyticsQuery({});

  console.log(data);

  const analyticsData: any = [];

  data &&
    data.courses.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, uv: item.count });
    });

  const minValue = 0;

  return (
    <div className="mt-[80px] sm:ml-64  bg-transparent">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen ">
          <div className=" px-10">
            <h1 className=" block sm:hidden text-3xl font-bold ">
              Courses Analytics
            </h1>
            <p className="">Last 12 months analytics data</p>
          </div>
          <div className=" w-full h-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="50%">
              <BarChart width={150} height={300} data={analyticsData}>
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <YAxis domain={[minValue, "auto"]} />
                <Bar dataKey="uv" fill="#6101ee">
                  <LabelList dataKey="uv" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseAnalytics;
