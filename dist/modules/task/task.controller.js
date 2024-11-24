"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_task = exports.get_tasks = void 0;
const task_model_1 = __importDefault(require("./task.model"));
const get_tasks = async (req, res) => {
    const tasks = await task_model_1.default.find({ user: req.user?._id });
    return res.json(tasks);
};
exports.get_tasks = get_tasks;
const create_task = async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    const task = await task_model_1.default.create({
        title,
        description,
        status,
        dueDate,
        user: req.user?._id,
    });
    return res.status(201).json(task);
};
exports.create_task = create_task;
