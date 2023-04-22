import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password: string, hashedPassword: string) => {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  return validPassword;
};

const createToken = (id: string) => {
  return jwt.sign(id, process.env.SECRET!);
};

const getUsers = (req: Request, res: Response) => {
  userModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const getUser = (req: Request, res: Response) => {
  userModel
    .findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const signupUser = async (req: Request, res: Response) => {
  const hashedPassword = await hashPassword(req.body.password);
  userModel
    .create({
      ...req.body,
      password: hashedPassword,
    })
    .then((user) => {
      const token = createToken(user.id);
      res.status(200).json({ user, token });
    })
    .catch(() => res.status(401).json({ error: "User already exists" }));
};

const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .then(async (user) => {
      if (!user) return res.status(401).json({ error: "User not found" });
      const token = createToken(user?.id);
      const validPassword = await comparePassword(password, user?.password!);
      validPassword
        ? res.status(200).json({ user, token })
        : res.status(401).json({ error: "Invalid credentials" });
    })
    .catch((err) => res.status(400).json({ error: err }));
};

const verifyToken = (req: Request, res: Response) => {
  try {
    const data = jwt.verify(req.body.token, process.env.SECRET!);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { signupUser, getUser, getUsers, loginUser, verifyToken };
