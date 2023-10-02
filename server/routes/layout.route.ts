import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { createLayout } from "../controllers/layout.controller";

const router = express.Router();

//Get all notification
router.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(createLayout)
);

export default router;
