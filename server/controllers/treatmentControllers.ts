import { Request, Response } from "express";
import treatmentModel from "../models/treatmentModel";

const getTreatments = (req: Request, res: Response) => {
  treatmentModel
    .find()
    .then((treatment) => res.status(200).json(treatment))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const getTreatment = (req: Request, res: Response) => {
  treatmentModel
    .findOne({ slug: req.params.slug })
    .then((treatment) => res.status(200).json(treatment))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const createTreatment = (req: Request, res: Response) => {
  treatmentModel
    .create(req.body)
    .then((treatment) => res.status(201).json(treatment))
    .catch((err) => res.status(400).json({ error: err.message }));
};

export { createTreatment, getTreatment, getTreatments };
