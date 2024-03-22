import { Schema, model } from "mongoose";

export const PasswordSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Password = model("Password", PasswordSchema);

export default Password;
