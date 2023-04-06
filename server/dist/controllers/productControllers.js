"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.getProduct = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const getProducts = (req, res) => {
    productModel_1.default
        .find()
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    productModel_1.default
        .findOne({ slug: req.params.slug })
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getProduct = getProduct;
const createProduct = (req, res) => {
    productModel_1.default
        .create(req.body)
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.createProduct = createProduct;
