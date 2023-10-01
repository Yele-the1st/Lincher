import express from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder } from "../controllers/order.controller";

const router = express.Router();

//Create an Order
router.post("/create-order", isAuthenticated, catchAsyncError(createOrder));

export default router;
