import { Request, Response, NextFunction } from 'express';

const try_catch = (controller: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.error("Error:", error);
      next(error); 
    }
  };
};

export default try_catch;