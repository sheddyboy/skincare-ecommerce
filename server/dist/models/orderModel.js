"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Types.ObjectId,
        required: true,
    },
    items: {
        type: [{ product: String, qty: Number, price: Number }],
    },
    status: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Order", orderSchema);
