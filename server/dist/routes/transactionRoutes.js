"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionControllers_1 = require("../controllers/transactionControllers");
const transactionRoutes = (0, express_1.Router)();
// Initiate Transaction
transactionRoutes.post("/", transactionControllers_1.initiateTransaction);
// Verify Transaction
transactionRoutes.get("/verify/:ref", transactionControllers_1.verifyTransaction);
exports.default = transactionRoutes;
