"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.getOrder = exports.createOrder = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const getOrders = (req, res) => {
    orderModel_1.default
        .find()
        .then((orders) => res.status(200).json(orders))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getOrders = getOrders;
const getOrder = (req, res) => {
    orderModel_1.default
        .findById(req.params.id)
        .then((order) => res.status(200).json(order))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getOrder = getOrder;
const createOrder = (req, res) => {
    orderModel_1.default
        .create(Object.assign(Object.assign({}, req.body), { user_id: req.user_id }))
        .then((order) => res.status(201).json(order))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.createOrder = createOrder;
