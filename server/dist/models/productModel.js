"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    desc: String,
    oldPrice: Number,
    newPrice: Number,
    slug: { type: String, required: true, unique: true },
    size: [String],
    featured: {
        type: Boolean,
        default: false,
    },
    productInfo: String,
    ingredients: String,
    shippingInfo: [String],
    imageUrl: String,
}, { timestamps: true });
productSchema.pre("validate", function (next) {
    this.slug = (0, slugify_1.default)(this.title, { lower: true, strict: true });
    next();
});
exports.default = (0, mongoose_1.model)("Product", productSchema);
