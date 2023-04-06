import { Router } from "express";
import webhookController from "../controllers/webhookController";

const webhookRoutes = Router();

webhookRoutes.post("/", webhookController);

export default webhookRoutes;
