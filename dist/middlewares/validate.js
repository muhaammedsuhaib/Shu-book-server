"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const message = error.details[0].message;
            res.status(400).json({ message: message });
            return;
        }
        next();
    };
};
exports.default = validate;
