import Joi from "joi";

export const create_task_schema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": `"title" should be a type of 'text'`,
    "string.empty": `"title" cannot be an empty field`,
    "any.required": `"title" is a required field`,
  }),

  description: Joi.string().optional().messages({
    "string.base": `"description" should be a type of 'text'`,
  }),

  status: Joi.string()
    .valid("To Do", "In Progress", "Completed")
    .default("To Do")
    .messages({
      "string.base": `"status" should be a type of 'text'`,
      "any.only": `"status" must be one of ['To Do', 'In Progress', 'Completed']`,
      "string.empty": `"status" cannot be an empty field`,
    }),

  dueDate: Joi.date().required().messages({
    "date.base": `"dueDate" should be a valid date`,
    "any.required": `"dueDate" is a required field`,
  }),

  user: Joi.string().required().messages({
    "string.base": `"user" should be a type of 'text'`,
    "any.required": `"user" is a required field`,
  }),
});
