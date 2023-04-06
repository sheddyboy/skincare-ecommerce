import { Router } from "express";
import {
  signupUser,
  getUser,
  getUsers,
  loginUser,
  verifyToken,
} from "../controllers/userControllers";

const userRoutes = Router();

// Get all users
userRoutes.get("/", getUsers);
// Get single users
userRoutes.get("/:id", getUser);
// Signup user
userRoutes.post("/signup", signupUser);
// Login user
userRoutes.post("/login", loginUser);
// Login token
userRoutes.post("/verify", verifyToken);

export default userRoutes;
