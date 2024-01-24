"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardHero from "@/components/admin/DashboardHero";
import EditFaq from "@/components/admin/customization/EditFaq";

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
        <div className=" flex h-screen">
          <div className=" ">
            <AdminSidebar
              activeT={3}
              selectedT={5}
              header={"Faq Customization"}
            />
          </div>
          <div className=" w-full">
            <DashboardHero />
            <EditFaq />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
