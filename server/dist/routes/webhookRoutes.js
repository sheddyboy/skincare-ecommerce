"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webhookController_1 = __importDefault(require("../controllers/webhookController"));
const webhookRoutes = (0, express_1.Router)();
webhookRoutes.post("/", webhookController_1.default);
exports.default = webhookRoutes;
