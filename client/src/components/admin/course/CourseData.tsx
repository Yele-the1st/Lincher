import { FC } from "react";
import toast from "react-hot-toast";
import { IoAddCircle } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";

interface CourseDataProps {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (benefits: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
}

const CourseData: FC<CourseDataProps> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };
  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };
  const handlePrerequisiteChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };
  const handleAddPrerequisite = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };
  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields above");
    }
  };

  return (
    <div className="w-full m-auto">
      <div>
        <label
          className={`text-base block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
        >
          What are the benefits for students in this course?
        </label>
        {benefits.map((benefit: any, index: number) => (
          <div
            key={index}
            className=" my-3 px-2 rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  "
          >
            <input
              type="text"
              name="Benefit"
              placeholder="You will be able to build a full stack L.."
              required
              value={benefit.title}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
              className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
            />
          </div>
        ))}
        <div className=" cursor-pointer w-full flex items-center justify-end  mt-3 md:mt-0 md:w-auto ">
          <button
            onClick={handleAddBenefit}
            className="w-full 800px:w-[140px]"
            type="button"
          >
            <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px]  text-[15px] font-medium ">
              <div className=" align-middle h-full flex justify-between items-center">
                <div className=" text-black flex items-center">Add</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <label
          className={`text-base block w-full font-medium leading-6 font-Poppins text-black dark:text-white`}
        >
          What are the prerequisites for starting this course?
        </label>
        {prerequisites.map((prerequisite: any, index: number) => (
          <div
            key={index}
            className=" my-3 px-2 rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  "
          >
            <input
              type="text"
              name="prerequisite"
              placeholder="You need basic knowledge of Crypto"
              required
              value={prerequisite.title}
              onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
              className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
            />
          </div>
        ))}
        <div className=" cursor-pointer w-full flex items-center justify-end  mt-3 md:mt-0 md:w-auto ">
          <button
            onClick={handleAddPrerequisite}
            className="w-full 800px:w-[140px]"
            type="button"
          >
            <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px]  text-[15px] font-medium ">
              <div className=" align-middle h-full flex justify-between items-center">
                <div className=" text-black flex items-center">Add</div>
              </div>
            </div>
          </button>
        </div>
      </div>
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

export default CourseData;
