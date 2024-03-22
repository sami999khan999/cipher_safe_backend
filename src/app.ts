import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectToDatabase } from "./utils/features.js";
import dotenv from "dotenv";
import { Webhook } from "svix";
import bodyParser from "body-parser";

import userRoute from "./routes/user.js";
import passwordRoute from "./routes/password.js";

config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;
connectToDatabase(process.env.MONGO_URI || "");

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRoute);
app.use("/api/password", passwordRoute);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
