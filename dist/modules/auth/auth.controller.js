"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_user = exports.register_user = void 0;
const user_model_1 = __importDefault(require("../user/user.model"));
const generate_token_1 = __importDefault(require("../../utils/generate_token"));
const register_user = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const userExists = await user_model_1.default.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    const user = await user_model_1.default.create({ username, email, password });
    if (user) {
        return res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
        });
    }
    else {
        return res.status(400).json({ message: "Invalid user data" });
    }
};
exports.register_user = register_user;
// Login user function
const login_user = async (req, res) => {
    const { email, password } = req.body;
    const user = await user_model_1.default.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        return res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: (0, generate_token_1.default)(user._id),
        });
    }
    else {
        return res.status(401).json({ message: "Invalid email or password" });
    }
};
exports.login_user = login_user;
