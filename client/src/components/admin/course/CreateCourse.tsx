"use client";

import { FC, useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";

interface CreateCourseProps {}

const CreateCourse: FC<CreateCourseProps> = ({}) => {
  const [active, setActive] = useState(2);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });

  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState([
    {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "Untitled Section",
      links: [
        {
          title: "",
          url: "",
        },
      ],
      suggestion: "",
    },
  ]);
  const [courseData, setCourseData] = useState({});

  const handleSubmit = async () => {};

  return (
    <div>
      <div className="p-4 sm:ml-64  bg-transparent">
        <div className=" dark:bg-background-dark bg-background mt-12 sm:px-4 py-4 ">
          <div className=" min-h-screen w-full flex">
            <div className=" w-8/12">
              {active === 0 && (
                <CourseInformation
                  courseInfo={courseInfo}
                  setCourseInfo={setCourseInfo}
                  active={active}
                  setActive={setActive}
                />
              )}
              {active === 1 && (
                <CourseData
                  benefits={benefits}
                  setBenefits={setBenefits}
                  prerequisites={prerequisites}
                  setPrerequisites={setPrerequisites}
                  active={active}
                  setActive={setActive}
                />
              )}
              {active === 2 && (
                <CourseContent
                  courseContentData={courseContentData}
                  setCourseContentData={setCourseContentData}
                  handleSubmit={handleSubmit}
                  active={active}
                  setActive={setActive}
                />
              )}
            </div>
            <div className=" w-4/12 flex justify-center">
              <CourseOptions active={active} setActive={setActive} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
