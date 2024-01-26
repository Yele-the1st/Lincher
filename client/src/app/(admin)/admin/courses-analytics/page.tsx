"use client";

import { FC } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Heading from "@/utils/Heading";
import DashboardHeader from "@/components/admin/DashboardHeader";
import CourseAnalytics from "@/components/admin/analytics/CourseAnalytics";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Heading
        title="Lincher - Admin"
        description="Elearning is a platform for students to learn and get help from teachers "
        keywords="Programing, MERN, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className=" ">
          <AdminSidebar selectedT={7} activeT={4} header={"Course Analytics"} />
        </div>
        <div className="w-full min-h-screen ">
          <DashboardHeader />
          <CourseAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
