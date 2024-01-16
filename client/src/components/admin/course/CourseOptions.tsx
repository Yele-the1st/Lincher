import { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface CourseOptionsProps {
  active: number;
  setActive: (active: number) => void;
}

const CourseOptions: FC<CourseOptionsProps> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div>
      {options.map((option: any, index: number) => (
        <div key={index} className={` w-full flex items-center py-5`}>
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
              active + 1 > index
                ? "bg-primary"
                : " bg-accent dark:bg-accent-hover "
            } relative `}
          >
            <IoMdCheckmark
              className={`text-[25px] ${
                active + 1 > index
                  ? " text-white "
                  : " dark:text-white text-black "
              } `}
            />
            {index !== options.length - 1 && (
              <div
                className={`absolute h-[30px] w-1 ${
                  active + 1 > index
                    ? " bg-primary "
                    : " bg-accent dark:bg-accent-hover"
                } bottom-[-100%]`}
              />
            )}
          </div>
          <h5
            className={`pl-3 ${
              active === index
                ? " dark:text-white text-black"
                : "dark:text-white text-black"
            } text-[16px]`}
          >
            {option}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
