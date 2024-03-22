import express from "express";
import { createUser } from "../controllers/user.js";

const app = express.Router();

// route - "/api/user/new"
app.post("/new", createUser);

// route - "/api/user/:id"
app.put("/api/user/:id");

export default app;
