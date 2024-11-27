import { Request, Response } from "express";
import Task from "./task.model";
import { ITask } from "./types";
import { Types } from "mongoose";
import User from "../user/user.model";

export const get_tasks = async (req: Request, res: Response): Promise<any> => {
  const tasks = await Task.find({ author: req.user?._id });
  if (!tasks) {
    return res.status(404).json({ message: "Task not found" });
  }
  return res
    .status(200)
    .json({ message: "Tasks retrived successfully", date: tasks });
};

export const create_task = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {
    task_name,
    description,
    reminddate,
    start_date,
    priority,
    status,
    task_type,
    notes,
    completion_date,
  } = req.body;

  try {
    const task: ITask = await Task.create({
      task_name,
      description,
      reminddate,
      start_date,
      priority,
      status,
      task_type,
      notes,
      completion_date,
      author: new Types.ObjectId(req.user?._id),
    });
    await User.findByIdAndUpdate(
      req.user?._id,
      { $push: { tasks: task._id } },
      { new: true }
    );
    return res
      .status(201)
      .json({ message: "Task created successfully", data: task });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
