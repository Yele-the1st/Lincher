import Image from "next/image";
import { FC, useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";

interface CourseInformationProps {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
}

const CourseInformation: FC<CourseInformationProps> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleFileChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" w-full m-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor=""
            className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
          >
            Course Name
          </label>
          <div className=" flex flex-1 w-full mt-2 mb-6">
            <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
              <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                <MdDriveFileRenameOutline className=" h-5 w-5" />
              </span>

              <input
                className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                type="text"
                required
                value={courseInfo.name}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, name: e.target.value })
                }
                id="name"
                placeholder="MERN stack LMS plateform with next 13"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
          >
            Course Description
          </label>
          <div className=" flex flex-1 w-full mt-2">
            <div className=" rounded-md flex w-full items-center justify-between relative p-2 h-min dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
              <textarea
                className=" w-full rounded-[8px]  bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                cols={30}
                rows={8}
                required
                value={courseInfo.description}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, description: e.target.value })
                }
                id="description"
                placeholder="Write something amazing..."
              ></textarea>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between mt-5">
          <div className=" w-[45%]">
            <label
              htmlFor=""
              className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
            >
              Course Price
            </label>
            <div className=" flex flex-1 w-full mt-2 mb-6">
              <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                  <MdDriveFileRenameOutline className=" h-5 w-5" />
                </span>

                <input
                  className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                  type="number"
                  name=""
                  required
                  value={courseInfo.price}
                  onChange={(e: any) =>
                    setCourseInfo({ ...courseInfo, price: e.target.value })
                  }
                  id="price"
                  placeholder="29"
                />
              </div>
            </div>
          </div>
          <div className=" w-[45%]">
            <label
              htmlFor=""
              className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
            >
              Estimated Price (Optional)
            </label>
            <div className=" flex flex-1 w-full mt-2 mb-6">
              <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                  <MdDriveFileRenameOutline className=" h-5 w-5" />
                </span>

                <input
                  className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                  type="number"
                  name=""
                  required
                  value={courseInfo.estimatedPrice}
                  onChange={(e: any) =>
                    setCourseInfo({
                      ...courseInfo,
                      estimatedPrice: e.target.value,
                    })
                  }
                  id="estimatedPrice"
                  placeholder="29"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
          >
            Course Tags
          </label>
          <div className=" flex flex-1 w-full mt-2 mb-6">
            <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
              <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                <MdDriveFileRenameOutline className=" h-5 w-5" />
              </span>

              <input
                className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                type="text"
                required
                value={courseInfo.tags}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, tags: e.target.value })
                }
                id="tags"
                placeholder="Socket io, tailwind css, LMS"
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between mt-5">
          <div className=" w-[45%]">
            <label
              htmlFor=""
              className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
            >
              Course Level
            </label>
            <div className=" flex flex-1 w-full mt-2 mb-6">
              <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                  <MdDriveFileRenameOutline className=" h-5 w-5" />
                </span>

                <input
                  className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                  type="text"
                  name=""
                  required
                  value={courseInfo.level}
                  onChange={(e: any) =>
                    setCourseInfo({ ...courseInfo, level: e.target.value })
                  }
                  id="level"
                  placeholder="Beginner/Intermediate/Expert"
                />
              </div>
            </div>
          </div>
          <div className=" w-[45%]">
            <label
              htmlFor=""
              className={`text-sm block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
            >
              Demo Url
            </label>
            <div className=" flex flex-1 w-full mt-2 mb-6">
              <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                  <MdDriveFileRenameOutline className=" h-5 w-5" />
                </span>

                <input
                  className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                  type="text"
                  name=""
                  required
                  value={courseInfo.demoUrl}
                  onChange={(e: any) =>
                    setCourseInfo({
                      ...courseInfo,
                      demoUrl: e.target.value,
                    })
                  }
                  id="demoUrl"
                  placeholder="eerd9wi"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={` w-full min-h-[10vh]  rounded-[8px] dark:bg-background-darkHover dark:border-[#1E1E1E] border-[rgb(232,237,241)] p-3 border flex items-center justify-center ${
              dragging ? "bg-indigo-600" : " bg-transparent"
            } `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDragDrop}
          >
            {courseInfo.thumbnail ? (
              <Image
                src={courseInfo.thumbnail}
                alt=""
                className=" max-h-full w-full object-cover"
                height={400}
                width={400}
              />
            ) : (
              <div className=" text-black dark:text-white">
                Drag and drop your thumbnail here or click to browse
              </div>
            )}
          </label>
        </div>
        <div className=" w-full flex items-center justify-end">
          <input
            type="submit"
            value={`Next`}
            className=" w-full 800px:w-[180px] h-[44px] bg-primary text-center text-white rounded mt-8 cursor-pointer   "
          />
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;
