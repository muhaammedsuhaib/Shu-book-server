import Joi from "joi";

export const create_task_schema = Joi.object({
  task_name: Joi.string().min(3).required().messages({
    "string.base": `"task_name" should be a type of 'text'`,
    "string.empty": `"task_name" cannot be an empty field`,
    "string.min": `"task_name" should have a minimum length of {#limit} characters`,
    "any.required": `"task_name" is a required field`,
  }),

  description: Joi.string().min(10).optional(),

  reminddate: Joi.date().min(new Date()).allow(null).allow("").optional(),

  start_date: Joi.date().allow(null).allow("").optional(),

  priority: Joi.string().valid("High", "Medium", "Low").required().messages({
    "string.base": `"priority" should be a type of 'text'`,
    "any.only": `"priority" must be one of ['High', 'Medium', 'Low']`,
    "string.empty": `"priority" cannot be an empty field`,
    "any.required": `"priority" is a required field`,
  }),

  status: Joi.string()
    .valid("Pending", "In Progress", "Completed")
    .required()
    .messages({
      "string.base": `"status" should be a type of 'text'`,
      "any.only": `"status" must be one of ['Pending', 'In Progress', 'Completed']`,
      "string.empty": `"status" cannot be an empty field`,
      "any.required": `"status" is a required field`,
    }),

  task_type: Joi.string().required().messages({
    "string.base": `"task_type" should be a type of 'text'`,
    "any.required": `"task_type" is a required field`,
  }),

  notes: Joi.string().allow("").optional(),

  completion_date: Joi.date().allow(null).allow("").optional(),
}).required();
