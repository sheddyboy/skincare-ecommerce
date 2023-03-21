import { Router } from "express";
import {
  createTreatment,
  getTreatment,
  getTreatments,
} from "../controllers/treatmentControllers";

const treatmentRoutes = Router();

// Get all treatments
treatmentRoutes.get("/", getTreatments);
// Get single treatment
treatmentRoutes.get("/:id", getTreatment);
// Create single treatment
treatmentRoutes.post("/", createTreatment);

export default treatmentRoutes;
