import User from "../user/user.model";
import generate_token from "../../utils/generate_token";

export const register_user = async (
  username: string,
  email: string,
  password: string
): Promise<any> => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  const user = await User.create({ username, email, password });
  if (!user) {
    throw new Error("Invalid user data");
  }
  const token = generate_token(user._id);
  return { user, token };
};


export const login_user = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    
    if (!user || !(await user.matchPassword(password))) {
      throw new Error("Invalid email or password");
    }
  
    const token = generate_token(user._id);
    return { user, token };
  };