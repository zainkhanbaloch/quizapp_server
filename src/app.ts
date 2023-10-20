import express from "express";
import cors from "cors";
import  handleGetQuestions  from './request_handler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("😎Hello World!");
});



app.post("/get_questions", handleGetQuestions);

app.listen(PORT, () => {
  console.log(`🔥Express Server running on port ${PORT}`);
});
