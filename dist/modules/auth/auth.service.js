"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_user = exports.register_user = void 0;
const user_model_1 = __importDefault(require("../user/user.model"));
const generate_token_1 = __importDefault(require("../../utils/generate_token"));
const register_user = async (username, email, password) => {
    const userExists = await user_model_1.default.findOne({ email });
    if (userExists) {
        throw new Error("User already exists");
    }
    const user = await user_model_1.default.create({ username, email, password });
    if (!user) {
        throw new Error("Invalid user data");
    }
    const userdata = await user_model_1.default.findById(user._id).select("-password");
    const token = (0, generate_token_1.default)(user._id);
    return { user: userdata, token };
};
exports.register_user = register_user;
const login_user = async (email, password) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        throw new Error("Invalid email or password");
    }
    const userdata = await user_model_1.default.findById(user._id).select("-password");
    const token = (0, generate_token_1.default)(user._id);
    return { user: userdata, token };
};
exports.login_user = login_user;
