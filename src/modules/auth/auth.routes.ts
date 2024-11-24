import express from "express";
import try_catch from "../../middlewares/try_catch";
import { login_user, register_user } from "./auth.controller";
import validate from "../../middlewares/validate";
import { auth_login_schema, auth_register_schema } from "./auth.schema";

const router = express.Router();

router.post(
  "/auth/register",
  validate(auth_register_schema),
  try_catch(register_user)
);
router.post("/auth/login", validate(auth_login_schema), try_catch(login_user));

export default router;
