"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const try_catch_1 = __importDefault(require("../../middlewares/try_catch"));
const auth_controller_1 = require("./auth.controller");
const validate_1 = __importDefault(require("../../middlewares/validate"));
const auth_schemas_1 = require("./auth.schemas");
const router = express_1.default.Router();
router.post("/auth/register", (0, validate_1.default)(auth_schemas_1.auth_register_schema), (0, try_catch_1.default)(auth_controller_1.register_user));
router.post("/auth/login", (0, validate_1.default)(auth_schemas_1.auth_login_schema), (0, try_catch_1.default)(auth_controller_1.login_user));
exports.default = router;
