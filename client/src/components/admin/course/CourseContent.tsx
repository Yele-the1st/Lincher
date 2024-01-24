"use client";

import { FC, useState } from "react";
import { FaFileCirclePlus, FaPencil } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";

import { FaChevronDown, FaFolderPlus } from "react-icons/fa";
import { BsLink45Deg, BsTrash3Fill } from "react-icons/bs";

import toast from "react-hot-toast";

interface CourseContentProps {
  active: number;
  setActive: (active: number) => void;
  courseContentData: any;
  setCourseContentData: (courseContentData: any) => void;
  handleSubmit: any;
}

const CourseContent: FC<CourseContentProps> = ({
  active,
  setActive,
  courseContentData,
  setCourseContentData,
  handleSubmit: handleCourseSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );

  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleCollapseToggle = (index: number) => {
    const updatedCollasped = [...isCollapsed];
    updatedCollasped[index] = !updatedCollasped[index];
    setIsCollapsed(updatedCollasped);
  };
  const handleRemoveLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };

  const handleAddLink = (index: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.push({ title: "", url: "" });
    setCourseContentData(updatedData);
  };

  const newContentHandler = (item: any) => {
    if (
      item.title === "" ||
      item.description === "" ||
      item.videoUrl === "" ||
      item.links[0].title === "" ||
      item.links[0].url === ""
    ) {
      toast.error("Please fill al the fields");
    } else {
      let newVideoSection = "";

      if (courseContentData.length > 0) {
        const lastVideoSection =
          courseContentData[courseContentData.length - 1].videoSection;

        //   use the last video section if available else use user input
        if (lastVideoSection) {
          newVideoSection = lastVideoSection;
        }
      }
      const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoSection: newVideoSection,
        links: [{ title: "", url: "" }],
      };

      setCourseContentData([...courseContentData, newContent]);
    }
  };

  const addNewSection = () => {
    if (
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      setActiveSection(activeSection + 1);
      const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoSection: `Untitled Section ${activeSection}`,
        links: [{ title: "", url: "" }],
      };
      setCourseContentData([...courseContentData, newContent]);
    }
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      setActive(active + 1);
      handleCourseSubmit();
    }
  };

  return (
    <div className="w-full m-auto">
      <form onSubmit={handleSubmit}>
        <div className="">
          {courseContentData?.map((item: any, index: number) => {
            const showSectionInput =
              index === 0 ||
              item.videoSection !== courseContentData[index - 1].videoSection;
            return (
              <>
                <div
                  className={`w-full dark:bg-background-darkHover bg-accent rounded-[8px]  p-4 ${
                    showSectionInput ? "mt-6" : "mb-0"
                  }`}
                >
                  {showSectionInput && (
                    <div className=" flex w-full items-center mb-6">
                      <input
                        type="text"
                        className={`text-[20px] font-semibold font-Poppins cursor-pointer dark:text-white text-black bg-transparent outline-none ${
                          item.videoSection === "Untitled Section"
                            ? "w-[170px]"
                            : "w-max"
                        }`}
                        value={item.videoSection}
                        onChange={(e) => {
                          const updatedData = [...courseContentData];
                          updatedData[index].videoSection = e.target.value;
                          setCourseContentData(updatedData);
                        }}
                      />
                      <div className="relative flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-1.5 px-2">
                        <FaPencil
                          className={`cursor-pointer w-4 h-4 dark:text-white text-black`}
                        />
                      </div>
                    </div>
                  )}
                  <div className=" flex items-center justify-between my-0">
                    {isCollapsed[index] ? (
                      <>
                        {item.title ? (
                          <p className=" font-Poppins dark:text-white text-black">
                            {index + 1}. {item.title}
                          </p>
                        ) : (
                          <>
                            <p className=" font-Poppins dark:text-white text-black">
                              {index + 1}. {`empty title`}
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <div></div>
                    )}
                    {/* arrow button for collasped video content */}
                    <div className=" flex gap-1 items-center">
                      <div className="relative flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-1.5 px-2">
                        <BsTrash3Fill
                          className={`dark:text-white w-4 h-4 text-black ${
                            index > 0 ? "cursor-pointer" : "cursor-no-drop"
                          }`}
                          onClick={() => {
                            if (index > 0) {
                              const updatedData = [...courseContentData];
                              updatedData.splice(index, 1);
                              setCourseContentData(updatedData);
                            }
                          }}
                        />
                      </div>
                      <div className="relative flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-1.5 px-2">
                        <FaChevronDown
                          className={`dark:text-white w-4 h-4 text-black text-lg ${
                            isCollapsed[index] ? " rotate-180" : " rotate-0"
                          }`}
                          onClick={() => handleCollapseToggle(index)}
                        />
                      </div>
                    </div>
                  </div>

                  {!isCollapsed[index] && (
                    <div className=" pt-4">
                      <div className="my-3">
                        <label className="text-base block font-medium leading-6 font-Poppins text-black dark:text-white">
                          Video Title
                        </label>
                        <div className=" flex flex-1 w-full mt-2 mb-6">
                          <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-accent-hover bg-[#f0f5f8] border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                            <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                              <MdDriveFileRenameOutline className=" h-5 w-5" />
                            </span>

                            <input
                              className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                              type="text"
                              value={item.title}
                              onChange={(e: any) => {
                                const updatedData = [...courseContentData];
                                updatedData[index].title = e.target.value;
                                setCourseContentData(updatedData);
                              }}
                              placeholder="Project Plan..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="my-3">
                        <label className="text-base block font-medium leading-6 font-Poppins text-black dark:text-white">
                          Video Url
                        </label>
                        <div className=" flex flex-1 w-full mt-2 mb-6">
                          <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-accent-hover bg-[#f0f5f8] border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                            <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                              <MdDriveFileRenameOutline className=" h-5 w-5" />
                            </span>

                            <input
                              className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                              type="text"
                              value={item.videoUrl}
                              onChange={(e: any) => {
                                const updatedData = [...courseContentData];
                                updatedData[index].videoUrl = e.target.value;
                                setCourseContentData(updatedData);
                              }}
                              placeholder="sddfrd..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="my-3">
                        <label className="text-base block font-medium leading-6 font-Poppins text-black dark:text-white">
                          Video Description
                        </label>
                        <div className=" flex flex-1 w-full mt-2 mb-6">
                          <div className=" rounded-md flex w-full items-center justify-between relative dark:bg-accent-hover bg-[#f0f5f8] border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                            <textarea
                              className=" w-full rounded-[8px] bg-transparent h-min block flex-1 border-0 p-2 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                              rows={8}
                              cols={30}
                              value={item.description}
                              onChange={(e: any) => {
                                const updatedData = [...courseContentData];
                                updatedData[index].description = e.target.value;
                                setCourseContentData(updatedData);
                              }}
                              placeholder="sddfrd..."
                            />
                          </div>
                        </div>
                      </div>
                      {item?.links.map((link: any, linkIndex: number) => (
                        <div key={linkIndex} className=" mb-3 block">
                          <div className="w-full flex items-center justify-between">
                            <label className="text-base block font-medium leading-6 font-Poppins text-black dark:text-white">
                              Link {linkIndex + 1}
                            </label>
                            <div className="relative flex items-center cursor-pointer justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-1.5 px-2">
                              <BsTrash3Fill
                                className={` ${
                                  item.links.length === 1
                                    ? "cursor-no-drop"
                                    : "cursor-pointer"
                                } text-black dark:text-white w-4 h-4`}
                                onClick={() =>
                                  item.links.length === 1
                                    ? null
                                    : handleRemoveLink(index, linkIndex)
                                }
                              />
                            </div>
                          </div>
                          <div className=" flex flex-1 w-full my-2">
                            <div className=" rounded-md flex w-full items-center justify-between relative dark:bg-accent-hover bg-[#f0f5f8] border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                              <input
                                className=" w-full rounded-[8px] bg-transparent h-min block flex-1 border-0 p-2 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                                type="text"
                                value={link.title}
                                onChange={(e: any) => {
                                  const updatedData = [...courseContentData];
                                  updatedData[index].links[linkIndex].title =
                                    e.target.value;
                                  setCourseContentData(updatedData);
                                }}
                                placeholder="Source Code title..."
                              />
                            </div>
                          </div>
                          <div className=" flex flex-1 w-full my-2 ">
                            <div className=" rounded-md flex w-full items-center justify-between relative dark:bg-accent-hover bg-[#f0f5f8] border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                              <input
                                className=" w-full rounded-[8px] bg-transparent h-min block flex-1 border-0 p-2 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                                type="text"
                                value={link.url}
                                onChange={(e: any) => {
                                  const updatedData = [...courseContentData];
                                  updatedData[index].links[linkIndex].url =
                                    e.target.value;
                                  setCourseContentData(updatedData);
                                }}
                                placeholder="Source Code Url..."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className=" inline-block mb-4">
                        <div
                          className=" text-base relative flex items-center justify-center hover:bg-accent  dark:hover:bg-accent-hover rounded-[8px] py-1.5 px-2 text-[18px] dark:text-white text-black cursor-pointer "
                          onClick={() => handleAddLink(index)}
                        >
                          <BsLink45Deg className="mr-2 w-5 h-5" /> Add Link
                        </div>
                      </div>
                    </div>
                  )}
                  {/* add new */}
                  {index === courseContentData.length - 1 && (
                    <div
                      onClick={(e: any) => newContentHandler(item)}
                      className=" pt-6 flex items-center cursor-pointer"
                    >
                      <div className=" flex itemms-center text-[18px] dark:text-white text-black cursor-pointer ">
                        <FaFileCirclePlus className={`mr-2 h-5 w-5`} />
                      </div>
                      <p className=" dark:text-white text-black underline underline-offset-2 decoration-dashed text-sm font-Poppins font-semibold">
                        Add New Content
                      </p>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div className=" mt-6 text-[20px] dark:text-white text-black ">
          <div
            onClick={() => addNewSection()}
            className=" flex items-center dark:text-white text-black cursor-pointer "
          >
            <FaFolderPlus className={`mr-2 h-5 w-5`} />
            <p className=" text-sm font-Poppins font-semibold">
              Add New Section
            </p>
          </div>
        </div>
      </form>

      <div className="w-full flex items-center gap-5 justify-between">
        <div
          className=" w-full 800px:w-[140px] flex items-center justify-center h-[44px] text-center text-white bg-primary rounded-[3px] cursor-pointer mt-8 "
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className=" w-full 800px:w-[140px] flex items-center justify-center h-[44px] text-center text-white bg-primary rounded-[3px] cursor-pointer mt-8 "
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
