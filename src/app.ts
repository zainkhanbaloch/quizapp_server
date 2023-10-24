import express from "express";
import cors from "cors";
import handleGetQuestions from "./controllers/handleGetQuestions";
import { handledb } from "./controllers/db_handler";
import testRouter from "./routes/testRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(testRouter);

app.listen(PORT, () => {
  console.log(`🔥Express Server running on port ${PORT}`);
});
