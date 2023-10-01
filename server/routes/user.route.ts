import express from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import {
  activateUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registerUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updatePicture,
  updateUserInfo,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const router = express.Router();

//Create a user
router.post("/registration", catchAsyncError(registerUser));

//Verify a user
router.post("/activation", catchAsyncError(activateUser));

//Login a user
router.post("/login", catchAsyncError(loginUser));

//Logout a user
router.get("/logout", isAuthenticated, catchAsyncError(logoutUser));

//Logout a user
router.get("/refresh", catchAsyncError(updateAccessToken));

//Get user info
router.get("/me", isAuthenticated, catchAsyncError(getUserInfo));

//Social Authentication
router.post("/social-auth", catchAsyncError(socialAuth));

//Get update user info
router.put(
  "/update-user-info",
  isAuthenticated,
  catchAsyncError(updateUserInfo)
);

// Update user Password
router.put(
  "/update-user-password",
  isAuthenticated,
  catchAsyncError(updatePassword)
);

// Update user Avatar
router.put(
  "/update-user-avatar",
  isAuthenticated,
  catchAsyncError(updatePicture)
);

// Get all users
router.get(
  "/get-all-users",
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(getAllUsers)
);
export default router;
