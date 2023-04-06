"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const treatmentControllers_1 = require("../controllers/treatmentControllers");
const treatmentRoutes = (0, express_1.Router)();
// Get all treatments
treatmentRoutes.get("/", treatmentControllers_1.getTreatments);
// Get single treatment
treatmentRoutes.get("/:slug", treatmentControllers_1.getTreatment);
// Create single treatment
treatmentRoutes.post("/", treatmentControllers_1.createTreatment);
exports.default = treatmentRoutes;
