"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTreatments = exports.getTreatment = exports.createTreatment = void 0;
const treatmentModel_1 = __importDefault(require("../models/treatmentModel"));
const getTreatments = (req, res) => {
    treatmentModel_1.default
        .find()
        .then((treatment) => res.status(200).json(treatment))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getTreatments = getTreatments;
const getTreatment = (req, res) => {
    treatmentModel_1.default
        .findOne({ slug: req.params.slug })
        .then((treatment) => res.status(200).json(treatment))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.getTreatment = getTreatment;
const createTreatment = (req, res) => {
    treatmentModel_1.default
        .create(req.body)
        .then((treatment) => res.status(201).json(treatment))
        .catch((err) => res.status(400).json({ error: err.message }));
};
exports.createTreatment = createTreatment;
