"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const treatmentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    desc: String,
    imageUrl: String,
    slug: { type: String, required: true, unique: true },
    featured: {
        type: Boolean,
        default: false,
    },
    details: {
        type: [{ title: String, desc: String, price: Number }],
    },
    content: String,
}, { timestamps: true });
treatmentSchema.pre("validate", function (next) {
    this.slug = (0, slugify_1.default)(this.title, { lower: true, strict: true });
    next();
});
exports.default = (0, mongoose_1.model)("Treatment", treatmentSchema);
