"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const userRoutes = (0, express_1.Router)();
// Get all users
userRoutes.get("/", userControllers_1.getUsers);
// Get single users
userRoutes.get("/:id", userControllers_1.getUser);
// Signup user
userRoutes.post("/signup", userControllers_1.signupUser);
// Login user
userRoutes.post("/login", userControllers_1.loginUser);
// Login token
userRoutes.post("/verify", userControllers_1.verifyToken);
exports.default = userRoutes;
