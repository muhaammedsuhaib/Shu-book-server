import Joi from 'joi';

export const auth_register_schema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    'string.base': '"username" should be a type of string',
    'string.min': '"username" should have a minimum length of 3',
    'string.max': '"username" should have a maximum length of 30',
    'any.required': '"username" is a required field',
  }),
  email: Joi.string().email().required().messages({
    'string.base': '"email" should be a type of string',
    'string.email': '"email" must be a valid email',
    'any.required': '"email" is a required field',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': '"password" should be a type of string',
    'string.min': '"password" should have a minimum length of 6',
    'any.required': '"password" is a required field',
  }),
});

export const auth_login_schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.base': '"email" should be a type of string',
      'string.email': '"email" must be a valid email',
      'any.required': '"email" is a required field',
    }),
    password: Joi.string().min(6).required().messages({
      'string.base': '"password" should be a type of string',
      'string.min': '"password" should have a minimum length of 6',
      'any.required': '"password" is a required field',
    }),
  });