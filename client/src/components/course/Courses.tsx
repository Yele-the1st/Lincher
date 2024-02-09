"use client";

import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { FC, useEffect, useState } from "react";

interface CoursesProps {}

const Courses: FC<CoursesProps> = ({}) => {
  const { data, isLoading } = useGetAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    setCourses(data?.courses)
  }, [data]);
  return <div>Courses</div>;
};

export default Courses;
