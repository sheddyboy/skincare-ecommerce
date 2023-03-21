import { Router } from "express";
import { createBlog, getBlog, getBlogs } from "../controllers/blogControllers";
import authMiddleware from "../middlewares/authMiddleware";

const blogRoutes = Router();

// Get all blogs
blogRoutes.get("/", getBlogs);
// Get single blog
blogRoutes.get("/:id", getBlog);
// Create single blog
blogRoutes.post("/", authMiddleware, createBlog);

export default blogRoutes;
