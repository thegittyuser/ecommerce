import express from "express";
import { submit } from "../controllers/user.controller.js";

const userRouter = express.Router();

router.post("/submit", submit);

export default userRouter;
