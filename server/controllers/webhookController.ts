import { Request, Response } from "express";

const webhookController = (req: Request, res: Response) => {
  const { event } = req.body;
  console.log(event);
  if (event === "charge.success") {
    return res.send(200);
  } else {
    return res.send(400);
  }
};

export default webhookController;
