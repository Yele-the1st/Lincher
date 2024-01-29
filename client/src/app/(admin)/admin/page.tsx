"use client";

import { FC } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardHero from "@/components/admin/DashboardHero";
import DashboardWidgets from "@/components/admin/DashboardWidgets";
import AdminProtected from "@/hooks/adminProtected";
import Heading from "@/utils/Heading";
import Userlytics from "@/components/admin/dashboard/Userlytics";
import UsersAnalytics from "@/components/admin/analytics/UsersAnalytics";

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
        <div className=" flex h-screen">
          <div className=" ">
            <AdminSidebar selectedT={0} activeT={0} header={"Dashboard"} />
          </div>
          <div className="w-full min-h-screen">
            <DashboardHero />
            <DashboardWidgets />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
