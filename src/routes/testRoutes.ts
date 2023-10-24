import express from "express";
import handleGetQuestions from "../controllers/handleGetQuestions";

const testRouter = express.Router();

testRouter.post("/get_questions", handleGetQuestions);

export default testRouter;
