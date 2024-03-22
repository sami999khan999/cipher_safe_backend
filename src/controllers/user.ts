import { Request, Response } from "express";
import User from "../models/user.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { clerkId, username, firstName, lastName, email } = req.body;

    const user = { clerkId, username, firstName, lastName, email };

    const prvUser = await User.findOne({ clerkId: clerkId });

    if (prvUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create(user);

    res.status(200).json({ newUser: newUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { username, firstName, lastName, email } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      { username: username, firstName: firstName, lastName: lastName },
      { new: true }
    );
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
