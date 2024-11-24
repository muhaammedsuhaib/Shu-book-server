import { Request, Response } from "express";
import Task from "./task.model";
import { ITask } from "./types";

export const get_tasks = async (req: Request, res: Response): Promise<any> => {
  const tasks = await Task.find({ user: req.user?._id });
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
  const { title, description, status, dueDate } = req.body;

  const task: ITask = await Task.create({
    title,
    description,
    status,
    dueDate,
    user: req.user?._id,
  });
  return res.status(201).json(task);
};
