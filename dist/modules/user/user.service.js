"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_user_by_id = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const find_user_by_id = async (userId) => {
    try {
        const user = await user_model_1.default.findById(userId).select("-password");
        if (!user) {
            throw new Error("User not found");
        }
        return { user };
    }
    catch (error) {
        throw new Error(error instanceof Error
            ? error.message
            : "Failed to get user");
    }
};
exports.find_user_by_id = find_user_by_id;
