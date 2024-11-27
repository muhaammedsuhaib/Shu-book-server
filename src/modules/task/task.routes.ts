import express from "express";
import try_catch from "../../middlewares/try_catch";
import validate from "../../middlewares/validate";
import { create_task, get_tasks } from "./task.controller";
import protect from "../../middlewares/auth";
import { create_task_schema } from "./task.schema";

const router = express.Router();

router
  .route("/task")
  .get(protect, try_catch(get_tasks))
  .post(protect,validate(create_task_schema), try_catch(create_task));

export default router;
