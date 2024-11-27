import mongoose, { Document } from "mongoose";

export interface ITask extends Document {
  task_name: string;
  description: string;
  reminddate: Date;
  start_date: Date;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "In Progress" | "Completed";
  task_type: string;
  notes?: string;
  completion_date?: Date;
  author: mongoose.Schema.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
}
