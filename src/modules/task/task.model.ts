import mongoose, { Schema, Model } from "mongoose";
import { ITask } from "./types";

const taskSchema: Schema<ITask> = new mongoose.Schema(
  {
    task_name: {
      type: String,
      required: [true, "Task name is required"],
      minlength: [3, "Task name must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    reminddate: {
      type: Date,
      min: [new Date(), "Reminder date cannot be in the past"],
      default: null,
    },
    start_date: {
      type: Date,
      default: null,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      required: [true, "Priority is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      required: [true, "Status is required"],
    },
    task_type: {
      type: String,
      required: [true, "Task type is required"],
    },
    notes: {
      type: String,
      default: "",
    },
    completion_date: {
      type: Date,
      default: null,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Task: Model<ITask> = mongoose.model<ITask>("Task", taskSchema);

export default Task;
