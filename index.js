import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import chatRoute from "./routes/chatRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", chatRoute);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
