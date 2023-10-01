import courseModel from "../models/course.model";

// create course
export const createCourse = async (data: any) => {
  const course = await courseModel.create(data);
  return course;
};
