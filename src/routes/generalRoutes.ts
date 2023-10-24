import express from "express";

const generalRouter = express.Router();

generalRouter.get("/", (req, res) => {
    res.send("😎Hello World!");
  });

export default generalRouter;