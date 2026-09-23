import express from "express";
import { submit } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/submit", submit);

export default userRouter;
