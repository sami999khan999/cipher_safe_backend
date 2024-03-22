import express from "express";
import {
  createPassword,
  deletePassword,
  getPassowrdById,
  updatePassword,
} from "../controllers/password.js";

const app = express.Router();

// route - /api/password/new
app.post("/new", createPassword);

// route - /api/password/:id
app
  .route("/:id")
  .get(getPassowrdById)
  .put(updatePassword)
  .delete(deletePassword);

export default app;
