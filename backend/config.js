import dotenv from "dotenv";
dotenv.config();

export const PORT = 8000;
export const mongoDBURL = process.env.mongoDBURL;