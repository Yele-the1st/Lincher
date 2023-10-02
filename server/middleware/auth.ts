import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { Secret } from "jsonwebtoken";
import { redis } from "../utils/redis";
import { IUser } from "../models/user.model";

// AUthenticate user
export const isAuthenticated = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.access_token;

    if (!access_token) {
      throw new ErrorHandler("Please login to access this resource", 400);
    }

    const decoded = jwt.verify(
      access_token,
      process.env.ACCESS_TOKEN as Secret
    ) as IUser;

    if (!decoded) {
      throw new ErrorHandler("Access Token is not valid", 400);
    }

    const user = await redis.get(decoded.id);

    if (!user) {
      throw new ErrorHandler("Please login to access this resource", 400);
    }

    req.user = JSON.parse(user);
    next();
  }
);

// Validate user Role
export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user!.role)) {
      throw new ErrorHandler(
        `Role:${req.user?.role} is not authorized to access this resource`,
        403
      );
    }
    next();
  };
};
