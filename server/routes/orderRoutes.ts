import { Router } from "express";
import {
  createOrder,
  getOrder,
  getOrders,
} from "../controllers/orderControllers";
import authMiddleware from "../middlewares/authMiddleware";

const orderRoutes = Router();

// Get all orders
orderRoutes.get("/", getOrders);
// Get single order
orderRoutes.get("/:id", getOrder);
// Create single order
orderRoutes.post("/", authMiddleware, createOrder);

export default orderRoutes;
