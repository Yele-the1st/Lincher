import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { redis } from "../utils/redis";
import { IUser } from "../models/user.model";
import { updateAccessToken } from "../controllers/user.controller";

// AUthenticate user
export const isAuthenticated = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    // Validate the request object
    if (!req.cookies || !req.cookies.access_token) {
      throw new ErrorHandler("Please login to access this resource", 400);
    }

    try {
      const decoded = jwt.verify(
        req.cookies.access_token,
        process.env.ACCESS_TOKEN as Secret
      ) as JwtPayload;

      // Process the decoded token
      const user = await redis.get(decoded.id);

      if (!user) {
        throw new ErrorHandler("Please login to access this resource", 400);
      }

      req.user = JSON.parse(user);
      next();
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        // Handle token expiration, e.g., update token
        try {
          await updateAccessToken(req, res, next);
        } catch (updateError) {
          // Log the error for debugging purposes
          console.error("Error updating access token:", updateError);
          return next(updateError);
        }
      } else {
        // Log the verification error for debugging purposes
        console.error("Access Token verification error:", error);
        // Handle other verification errors
        throw new ErrorHandler("Access Token is not valid", 400);
      }
    }
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
