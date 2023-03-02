import express from "express";

import dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

const token = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: token,
});
const openai = new OpenAIApi(configuration);

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0.6,
    max_tokens: 7,
  });
  res.send({ result: response.data.choices[0].text });
});

export default router;
