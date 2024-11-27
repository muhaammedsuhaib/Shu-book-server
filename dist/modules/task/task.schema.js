"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_task_schema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.create_task_schema = joi_1.default.object({
    task_name: joi_1.default.string().min(3).required().messages({
        "string.base": `"task_name" should be a type of 'text'`,
        "string.empty": `"task_name" cannot be an empty field`,
        "string.min": `"task_name" should have a minimum length of {#limit} characters`,
        "any.required": `"task_name" is a required field`,
    }),
    description: joi_1.default.string().min(10).optional(),
    reminddate: joi_1.default.date().min(new Date()).required().messages({
        "date.base": `"reminddate" should be a valid date`,
        "date.min": `"reminddate" cannot be in the past`,
        "any.required": `"reminddate" is a required field`,
    }),
    start_date: joi_1.default.date().max(new Date()).required().messages({
        "date.base": `"start_date" should be a valid date`,
        "date.max": `"start_date" cannot be in the future`,
        "any.required": `"start_date" is a required field`,
    }),
    priority: joi_1.default.string().valid("High", "Medium", "Low").required().messages({
        "string.base": `"priority" should be a type of 'text'`,
        "any.only": `"priority" must be one of ['High', 'Medium', 'Low']`,
        "string.empty": `"priority" cannot be an empty field`,
        "any.required": `"priority" is a required field`,
    }),
    status: joi_1.default.string()
        .valid("Pending", "In Progress", "Completed")
        .required()
        .messages({
        "string.base": `"status" should be a type of 'text'`,
        "any.only": `"status" must be one of ['Pending', 'In Progress', 'Completed']`,
        "string.empty": `"status" cannot be an empty field`,
        "any.required": `"status" is a required field`,
    }),
    task_type: joi_1.default.string().required().messages({
        "string.base": `"task_type" should be a type of 'text'`,
        "any.required": `"task_type" is a required field`,
    }),
    notes: joi_1.default.string().allow("").optional(),
    completion_date: joi_1.default.date().min(new Date()).allow(null).allow("").optional(),
}).required();
