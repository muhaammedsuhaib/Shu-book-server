"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../modules/user/user.model"));
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res
            .status(401)
            .json({ message: "Not authorized, no token provided" });
    }
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Retrieve user details
        const user = await user_model_1.default.findById(decoded.id).select("-password");
        if (!user) {
            return res
                .status(401)
                .json({ message: "Not valid token, user not found" });
        }
        // Attach user to request
        req.user = user;
        next();
    }
    catch (error) {
        // Handle invalid token or other JWT errors
        return res
            .status(401)
            .json({ message: "Not authorized, token verification failed" });
    }
};
exports.default = protect;
