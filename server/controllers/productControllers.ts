import { Request, Response } from "express";
import productModel from "../models/productModel";

const getProducts = (req: Request, res: Response) => {
  productModel
    .find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const getProduct = (req: Request, res: Response) => {
  productModel
    .findById(req.params.id)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const createProduct = (req: Request, res: Response) => {
  productModel
    .create(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json({ error: err.message }));
};

export { createProduct, getProduct, getProducts };
