"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_task = exports.get_tasks = void 0;
const task_model_1 = __importDefault(require("./task.model"));
const mongoose_1 = require("mongoose");
const user_model_1 = __importDefault(require("../user/user.model"));
const get_tasks = async (req, res) => {
    const user = await user_model_1.default.findById(req?.user?._id)
        .populate({
        path: "tasks",
        options: { sort: { created_at: -1 } },
    })
        .select("-password");
    if (!user?.tasks) {
        return res.status(404).json({ message: "No tasks found for the user" });
    }
    return res
        .status(200)
        .json({ message: "Tasks retrieved successfully", data: user?.tasks });
};
exports.get_tasks = get_tasks;
const create_task = async (req, res) => {
    const { task_name, description, reminddate, start_date, priority, status, task_type, notes, completion_date, } = req.body;
    try {
        const task = await task_model_1.default.create({
            task_name,
            description,
            reminddate,
            start_date,
            priority,
            status,
            task_type,
            notes,
            completion_date,
            author: new mongoose_1.Types.ObjectId(req.user?._id),
        });
        await user_model_1.default.findByIdAndUpdate(req.user?._id, { $push: { tasks: task._id } }, { new: true });
        return res
            .status(201)
            .json({ message: "Task created successfully", data: task });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.create_task = create_task;
