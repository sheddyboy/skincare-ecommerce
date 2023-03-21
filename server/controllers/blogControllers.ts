import { Request, Response } from "express";
import blogModel from "../models/blogModel";

const getBlogs = (req: Request, res: Response) => {
  blogModel
    .find()
    .then((blogs) => res.status(200).json(blogs))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const getBlog = (req: Request, res: Response) => {
  blogModel
    .findById(req.params.id)
    .then((blog) => res.status(200).json(blog))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const createBlog = (req: any, res: Response) => {
  blogModel
    .create({ ...req.body, user_id: req.user_id })
    .then((blog) => res.status(200).json(blog))
    .catch((err) => res.status(400).json({ error: err.message }));
};

export { createBlog, getBlog, getBlogs };
