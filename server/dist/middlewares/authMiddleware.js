"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    var _a, _b;
    try {
        const token = (_b = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) !== null && _b !== void 0 ? _b : "";
        const user_id = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        req.user_id = user_id;
        next();
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.default = authMiddleware;
