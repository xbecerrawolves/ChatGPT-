import OpenAI from "openai";

const openai = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY, // Best practice: use env variables
});

const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Write a haiku about coding." }],
});

console.log(completion.choices[0].message.content);