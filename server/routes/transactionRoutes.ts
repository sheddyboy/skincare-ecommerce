import { Router } from "express";
import {
  initiateTransaction,
  verifyTransaction,
} from "../controllers/transactionControllers";

const transactionRoutes = Router();

// Initiate Transaction
transactionRoutes.post("/", initiateTransaction);

// Verify Transaction
transactionRoutes.get("/verify/:ref", verifyTransaction);

export default transactionRoutes;
