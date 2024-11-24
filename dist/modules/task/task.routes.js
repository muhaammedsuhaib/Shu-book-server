"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const try_catch_1 = __importDefault(require("../../middlewares/try_catch"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const task_schema_1 = require("./task.schema");
const task_controller_1 = require("./task.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router
    .route("/task")
    .get(auth_1.default, (0, try_catch_1.default)(task_controller_1.get_tasks))
    .post(auth_1.default, (0, validate_1.default)(task_schema_1.create_task_schema), (0, try_catch_1.default)(task_controller_1.create_task));
exports.default = router;
