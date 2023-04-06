"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webhookController = (req, res) => {
    const { event } = req.body;
    console.log(event);
    if (event === "charge.success") {
        return res.send(200);
    }
    else {
        return res.send(400);
    }
};
exports.default = webhookController;
