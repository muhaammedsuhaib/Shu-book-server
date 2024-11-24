"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const try_catch = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        }
        catch (error) {
            console.error("Error:", error);
            next(error);
        }
    };
};
exports.default = try_catch;
