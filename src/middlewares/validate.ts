import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const message = error.details[0].message;
      res.status(400).json({ message: message });
      return;
    }

    next();
  };
};

export default validate;
