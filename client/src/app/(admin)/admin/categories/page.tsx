"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardHero from "@/components/admin/DashboardHero";
import EditCategories from "@/components/admin/customization/EditCategories";

import AdminProtected from "@/hooks/adminProtected";
import Heading from "@/utils/Heading";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <AdminProtected>
      <Heading
        title={`Admin - Lincher`}
        description="Lincher is a platform for student to learn and get help from teachers"
        keywords="Programming, courses, Machine Learning"
      />
      <div className=" flex h-screen">
        <div className=" ">
          <AdminSidebar
            activeT={3}
            selectedT={7}
            header={"Categories Customization"}
          />
        </div>
        <div className=" w-full">
          <DashboardHero />
          <EditCategories />
        </div>
      </div>
    </AdminProtected>
  );
};

export default page;
