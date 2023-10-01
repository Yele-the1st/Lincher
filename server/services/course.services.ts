import courseModel from "../models/course.model";

// create course
export const createCourse = async (data: any) => {
  const course = await courseModel.create(data);
  return course;
};

// Get All courses
export const getAllCoursesContent = async () => {
  const courses = await courseModel.find().lean().sort({ createdAt: -1 });

  return courses;
};
