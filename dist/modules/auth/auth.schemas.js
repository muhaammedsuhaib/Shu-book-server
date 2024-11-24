"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_login_schema = exports.auth_register_schema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.auth_register_schema = joi_1.default.object({
    username: joi_1.default.string().min(3).max(30).required().messages({
        'string.base': '"username" should be a type of string',
        'string.min': '"username" should have a minimum length of 3',
        'string.max': '"username" should have a maximum length of 30',
        'any.required': '"username" is a required field',
    }),
    email: joi_1.default.string().email().required().messages({
        'string.base': '"email" should be a type of string',
        'string.email': '"email" must be a valid email',
        'any.required': '"email" is a required field',
    }),
    password: joi_1.default.string().min(6).required().messages({
        'string.base': '"password" should be a type of string',
        'string.min': '"password" should have a minimum length of 6',
        'any.required': '"password" is a required field',
    }),
});
exports.auth_login_schema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'string.base': '"email" should be a type of string',
        'string.email': '"email" must be a valid email',
        'any.required': '"email" is a required field',
    }),
    password: joi_1.default.string().min(6).required().messages({
        'string.base': '"password" should be a type of string',
        'string.min': '"password" should have a minimum length of 6',
        'any.required': '"password" is a required field',
    }),
});
