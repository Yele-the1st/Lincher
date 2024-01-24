"use client";

import { FC } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Heading from "@/utils/Heading";
import DashboardHeader from "@/components/admin/DashboardHeader";
import EditCourse from "@/components/admin/course/EditCourse";

interface pageProps {}

const page: FC = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <Heading
        title="Lincher - Admin"
        description="Elearning is a platform for students to learn and get help from teachers "
        keywords="Programing, MERN, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className=" ">
          <AdminSidebar selectedT={0} activeT={2} header={"Create Courses"} />
        </div>
        <div className="w-full min-h-screen ">
          <DashboardHeader />
          <EditCourse id={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
