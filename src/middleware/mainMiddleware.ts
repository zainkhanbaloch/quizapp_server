import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";

const mainMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("This is middleware");
  next(); // Move to the next middleware or route
};

export default mainMiddleware;