import express from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addReplyReview,
  addReview,
  deleteCourse,
  editCourse,
  getAllCourses,
  getAllCoursesContent,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { updateAccessToken } from "../controllers/user.controller";
const router = express.Router();

//Create a course
router.post(
  "/create-course",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(uploadCourse)
);

//Edit a course
router.put(
  "/edit-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(editCourse)
);

//get a course
router.get("/get-course/:id", catchAsyncError(getSingleCourse));

//get all course
router.get("/get-courses", catchAsyncError(getAllCourses));

//get a course by purchase
router.get(
  "/get-course-content/:id",
  updateAccessToken,
  isAuthenticated,
  catchAsyncError(getCourseByUser)
);

//add question
router.put(
  "/add-question",
  updateAccessToken,
  isAuthenticated,
  catchAsyncError(addQuestion)
);

//add answer
router.put(
  "/add-answer",
  updateAccessToken,
  isAuthenticated,
  catchAsyncError(addAnswer)
);

//add review
router.put(
  "/add-review/:id",
  updateAccessToken,
  isAuthenticated,
  catchAsyncError(addReview)
);

//add review
router.put(
  "/add-review-reply",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(addReplyReview)
);

//Get all courses content
router.get(
  "/get-all-courses",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(getAllCoursesContent)
);

// Get all users
router.delete(
  "/delete-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(deleteCourse)
);

export default router;
