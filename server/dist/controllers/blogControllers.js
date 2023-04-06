"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = exports.getBlog = exports.createBlog = void 0;
const blogModel_1 = __importDefault(require("../models/blogModel"));
const getBlogs = (req, res) => {
    blogModel_1.default
        .find()
        .then((blogs) => res.status(200).json(blogs))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getBlogs = getBlogs;
const getBlog = (req, res) => {
    blogModel_1.default
        .findOne({ slug: req.params.slug })
        .then((blog) => res.status(200).json(blog))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getBlog = getBlog;
const createBlog = (req, res) => {
    blogModel_1.default
        .create(Object.assign(Object.assign({}, req.body), { user_id: req.user_id }))
        .then((blog) => res.status(200).json(blog))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.createBlog = createBlog;
