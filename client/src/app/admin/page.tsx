"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import CreateCourse from "@/components/admin/course/CreateCourse";
import DashboardHero from "@/components/admin/DashboardHero";
import AdminProtected from "@/hooks/adminProtected";
import Heading from "@/utils/Heading";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title={`Admin - Lincher`}
          description="Lincher is a platform for student to learn and get help from teachers"
          keywords="Programming, courses, Machine Learning"
        />
        <div className=" flex h-[200vh]">
          <div className=" ">
            <AdminSidebar />
          </div>
          <div className="">
            <DashboardHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
