import { Request, Response } from "express";
import orderModel from "../models/orderModel";

const getOrders = (req: Request, res: Response) => {
  orderModel
    .find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const getOrder = (req: Request, res: Response) => {
  orderModel
    .findById(req.params.id)
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const createOrder = (req: any, res: Response) => {
  orderModel
    .create({ ...req.body, user_id: req.user_id })
    .then((order) => res.status(201).json(order))
    .catch((err) => res.status(400).json({ error: err.message }));
};

export { createOrder, getOrder, getOrders };
