"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
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
        required: [true, "Reminder date is required"],
        min: [new Date(), "Reminder date cannot be in the past"],
    },
    start_date: {
        type: Date,
        required: [true, "Start date is required"],
        max: [new Date(), "Start date cannot be in the future"],
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
        min: [new Date(), "Completion date cannot be in the past"],
        default: null,
    },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
const Task = mongoose_1.default.model("Task", taskSchema);
exports.default = Task;
