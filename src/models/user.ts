import { Schema, model } from "mongoose";

export const CreateUser = new Schema(
  {
    clerkId: {
      type: "string",
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = model("User", CreateUser);

export default User;
