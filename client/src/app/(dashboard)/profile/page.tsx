"use client";

import { FC } from "react";
import Heading from "@/utils/Heading";
import Header from "@/components/Navigation/Header";
import { useState } from "react";
import { useSelector } from "react-redux";
import Profile from "@/components/Profile/Profile";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Auth");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <Heading
        title={`${user?.name} profile - Lincher`}
        description="Lincher is a platform for student to learn and get help from teachers"
        keywords="Programming, courses, Machine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Profile user={user} />
    </div>
  );
};

export default Page;
