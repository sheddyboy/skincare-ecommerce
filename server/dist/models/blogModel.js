"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const blogSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Types.ObjectId,
        required: true,
    },
    slug: { type: String, required: true, unique: true },
    title: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    tag: {
        type: String,
        required: true,
    },
    imageUrl: String,
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });
blogSchema.pre("validate", function (next) {
    this.slug = (0, slugify_1.default)(this.title, { lower: true, strict: true });
    next();
});
exports.default = (0, mongoose_1.model)("Blog", blogSchema);
