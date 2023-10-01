import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { redis } from "../utils/redis";

export const getUserById = async (id: string) => {
  try {
    // const user = await userModel.findById(id);
    const userJson = await redis.get(id);
    if (userJson) {
      const user = JSON.parse(userJson);
      return user;
    }
  } catch (error: any) {
    // Handle any errors that might occur during database retrieval
    throw new ErrorHandler(
      `Error while fetching user by ID: ${error.message}`,
      400
    );
  }
};

// Get All users
export const getAllUsers = async () => {
  const users = await userModel.find().lean().sort({ createdAt: -1 });

  return users;
};
