"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControllers_1 = require("../controllers/productControllers");
const productRoutes = (0, express_1.Router)();
// Get all products
productRoutes.get("/", productControllers_1.getProducts);
// Get single product
productRoutes.get("/:slug", productControllers_1.getProduct);
// Create single product
productRoutes.post("/", productControllers_1.createProduct);
exports.default = productRoutes;
