import { Request, Response } from "express";
import https from "https";

const initiateTransaction = (req: Request, res: Response) => {
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

  const reqPaystack = https
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

const verifyTransaction = (req: Request, res: Response) => {
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: `/transaction/verify/${req.params.ref}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
    },
  };

  const reqPaystack = https
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

export { initiateTransaction, verifyTransaction };
