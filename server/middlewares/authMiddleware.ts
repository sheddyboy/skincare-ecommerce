import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] ?? "";
    const user_id = jwt.verify(token, process.env.SECRET!);
    req.user_id = user_id;
    next();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export default authMiddleware;
