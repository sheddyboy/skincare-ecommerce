import { Router } from "express";
import {
  signupUser,
  getUser,
  getUsers,
  loginUser,
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

export default userRoutes;
