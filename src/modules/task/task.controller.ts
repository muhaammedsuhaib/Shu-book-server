import { Request, Response } from "express";
import Task from "./task.model";
import { ITask } from "./types";

export const get_tasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tasks = await Task.find({ user: req.user?._id });
  return res.json(tasks);
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
