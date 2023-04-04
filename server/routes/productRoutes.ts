import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/productControllers";

const productRoutes = Router();

// Get all products
productRoutes.get("/", getProducts);
// Get single product
productRoutes.get("/:slug", getProduct);
// Create single product
productRoutes.post("/", createProduct);

export default productRoutes;
