import { Request, Response } from "express";
import User from "../user/user.model";
import generate_token from "../../utils/generate_token";

export const register_user = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ username, email, password });
  if (user) {
    return res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }
};

// Login user function
export const login_user = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generate_token(user._id),
    });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};
