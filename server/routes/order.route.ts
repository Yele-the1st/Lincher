import express from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";

const router = express.Router();

//Create an Order
router.post("/create-order", isAuthenticated, catchAsyncError(createOrder));

//Get all Orders
router.get(
  "/get-all-orders",
  isAuthenticated,
  authorizeRoles("admin"),
  catchAsyncError(getAllOrders)
);

export default router;
