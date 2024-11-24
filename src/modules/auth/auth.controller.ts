import { Request, Response } from "express";
import * as authService from "./auth.service";

export const register_user = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, email, password } = req.body;

  try {
    const user = await authService.register_user(username, email, password);
    return res
      .status(201)
      .json({ message: "Registration successful", data: user });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(400).json({ message });
  }
};

export const login_user = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;

  try {
    const { user, token } = await authService.login_user(email, password);
    return res
      .status(200)
      .json({ message: "Login successful", data: { user, token } });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(400).json({ message });
  }
};
