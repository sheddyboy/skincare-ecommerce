"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderControllers_1 = require("../controllers/orderControllers");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const orderRoutes = (0, express_1.Router)();
// Get all orders
orderRoutes.get("/", orderControllers_1.getOrders);
// Get single order
orderRoutes.get("/:id", orderControllers_1.getOrder);
// Create single order
orderRoutes.post("/", authMiddleware_1.default, orderControllers_1.createOrder);
exports.default = orderRoutes;
