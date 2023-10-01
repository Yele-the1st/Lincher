import express from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addReplyReview,
  addReview,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
const router = express.Router();

//Create a course
router.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(uploadCourse)
);

//Edit a course
router.put(
  "/edit-course/:id",
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
  isAuthenticated,
  catchAsyncError(getCourseByUser)
);

//add question
router.put("/add-question", isAuthenticated, catchAsyncError(addQuestion));

//add answer
router.put("/add-answer", isAuthenticated, catchAsyncError(addAnswer));

//add review
router.put("/add-review/:id", isAuthenticated, catchAsyncError(addReview));

//add review
router.put(
  "/add-review-reply",
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(addReplyReview)
);

export default router;
