import User from "./user.model";

export const find_user_by_id = async (
  userId: string
): Promise<{ user: any }> => {
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found");
    }

    return { user };
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to get user"
    );
  }
};
