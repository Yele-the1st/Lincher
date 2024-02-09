"use client";

import Header from "@/components/Navigation/Header";
import Hero from "@/components/Hero/Hero";
import Heading from "@/utils/Heading";
import { FC, useState } from "react";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Loader from "@/components/Loader/Loader";
import Courses from "@/components/course/Courses";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Auth");
  const { data, isLoading, refetch } = useGetHeroDataQuery("Banner", {});

  return (
    <div>
      <Heading
        title="Lincher | The future of Learning"
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero data={data} />
          <Courses />
        </>
      )}
    </div>
  );
};

export default Page;
