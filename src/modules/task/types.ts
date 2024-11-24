import { Document } from "mongoose";
import { IUser } from "../user/types";

export interface ITask extends Document {
    title: string;
    description?: string;
    status: 'To Do' | 'In Progress' | 'Completed';
    dueDate: Date;
    user: IUser['_id'];  
  }