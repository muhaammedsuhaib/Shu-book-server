import express from "express";
import try_catch from "../../middlewares/try_catch";
import { profile_user } from "./user.controller";
import protect from "../../middlewares/auth";

const router = express.Router();

router.get("/user",protect, try_catch(profile_user));

export default router;
