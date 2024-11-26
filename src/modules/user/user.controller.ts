import { Request, Response } from "express";
import * as userServices from "./user.service";

export const profile_user = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.user.id;
  try {
    const user = await userServices.find_user_by_id(userId);

    return res
      .status(201)
      .json({ message: "User profile retrieved successfully", data: { user } });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(400).json({ message });
  }
};
