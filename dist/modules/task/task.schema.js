"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_task_schema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.create_task_schema = joi_1.default.object({
    title: joi_1.default.string().required().messages({
        "string.base": `"title" should be a type of 'text'`,
        "string.empty": `"title" cannot be an empty field`,
        "any.required": `"title" is a required field`,
    }),
    description: joi_1.default.string().optional().messages({
        "string.base": `"description" should be a type of 'text'`,
    }),
    status: joi_1.default.string()
        .valid("To Do", "In Progress", "Completed")
        .default("To Do")
        .messages({
        "string.base": `"status" should be a type of 'text'`,
        "any.only": `"status" must be one of ['To Do', 'In Progress', 'Completed']`,
        "string.empty": `"status" cannot be an empty field`,
    }),
    dueDate: joi_1.default.date().required().messages({
        "date.base": `"dueDate" should be a valid date`,
        "any.required": `"dueDate" is a required field`,
    }),
    user: joi_1.default.string().required().messages({
        "string.base": `"user" should be a type of 'text'`,
        "any.required": `"user" is a required field`,
    }),
});
