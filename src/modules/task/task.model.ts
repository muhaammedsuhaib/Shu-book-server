import mongoose, { Schema, Model } from "mongoose";
import { ITask } from "./types";

const taskSchema: Schema<ITask> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Completed"],
      default: "To Do",
    },
    dueDate: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Task: Model<ITask> = mongoose.model<ITask>("Task", taskSchema);

export default Task;
