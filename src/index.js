import dotenv from "dotenv";
import connectionDB from "./db/INDEX.JS";

dotenv.config({
  path: "./env",
});
connectionDB();