"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogControllers_1 = require("../controllers/blogControllers");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const blogRoutes = (0, express_1.Router)();
// Get all blogs
blogRoutes.get("/", blogControllers_1.getBlogs);
// Get single blog
blogRoutes.get("/:slug", blogControllers_1.getBlog);
// Create single blog
blogRoutes.post("/", authMiddleware_1.default, blogControllers_1.createBlog);
exports.default = blogRoutes;
