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

router.post("/", async (req, res) => {
  const prompt = `Please generate a response to this prompt: "${req.body.prompt}"`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 7,
  });
  let result = response.data.choices[0].text;
  result = result.replace(/\\n/g, "");
  result = result.replace(/\\/g, "");
  result = result.replace(/!/g, "");
  result = result.replace(/\n\n/g, "");
  res.send({ result: result });
});

export default router;
