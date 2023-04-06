"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTransaction = exports.initiateTransaction = void 0;
const https_1 = __importDefault(require("https"));
const initiateTransaction = (req, res) => {
    const { email, amount } = req.body;
    const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: "/transaction/initialize",
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
            "Content-Type": "application/json",
        },
    };
    const reqPaystack = https_1.default
        .request(options, (resPayStack) => {
        let data = "";
        resPayStack.on("data", (chunk) => {
            data += chunk;
        });
        resPayStack.on("end", () => {
            res.status(200).json(JSON.parse(data));
        });
    })
        .on("error", (error) => {
        res.status(400).json(error);
        console.error(error);
    });
    reqPaystack.write(JSON.stringify({ email, amount: amount * 100 }));
    reqPaystack.end();
};
exports.initiateTransaction = initiateTransaction;
const verifyTransaction = (req, res) => {
    const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: `/transaction/verify/${req.params.ref}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
    };
    const reqPaystack = https_1.default
        .request(options, (resPayStack) => {
        let data = "";
        resPayStack.on("data", (chunk) => {
            data += chunk;
        });
        resPayStack.on("end", () => {
            res.status(200).json(JSON.parse(data));
        });
    })
        .on("error", (error) => {
        res.status(400).json(error);
    });
    reqPaystack.end();
};
exports.verifyTransaction = verifyTransaction;
