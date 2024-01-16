"use client";

import { FC } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Heading from "@/utils/Heading";
import CreateCourse from "@/components/admin/course/CreateCourse";
import DashboardHeader from "@/components/admin/DashboardHeader";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Heading
        title="Lincher - Admin"
        description="Elearning is a platform for students to learn and get help from teachers "
        keywords="Programing, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className=" ">
          <AdminSidebar />
        </div>
        <div className="w-full ">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;
