import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    matchPassword(enteredPassword: string): Promise<boolean>;
    tasks: mongoose.Types.ObjectId[];
  }