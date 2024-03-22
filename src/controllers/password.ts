import { Request, Response } from "express";
import Password from "../models/password.js";

export const createPassword = async (req: Request, res: Response) => {
  try {
    const { clerkId, site, username, password } = req.body;

    const passwords = {
      clerkId,
      site,
      username,
      password,
    };

    const newPassword = await Password.create(passwords);

    res.status(200).json({ newPassword });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getPassowrdById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const page = Number(req.query.page) || 1;
    const skip = Number(page - 1) * 6;

    const allPasswords = await Password.find({ clerkId: id });

    const password = await Password.find({ clerkId: id })
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(6);

    const totalePage = Math.ceil(allPasswords.length / 6);

    res.status(200).json({ passwords: password, totalePages: totalePage });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { site, username, password } = req.body;

    const updatedPassword = await Password.findOneAndUpdate(
      { _id: id },
      {
        site,
        username,
        password,
      },
      { new: true }
    );

    res.status(200).json(updatedPassword);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePassword = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletePassword = await Password.findByIdAndDelete(id);

    res.status(200).json({ message: "Password deleted" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
