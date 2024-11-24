import { IUser } from "../modules/user/types";

declare global {
  namespace Express {
    interface Request {
      user?: IUser; 
    }
  }
}
