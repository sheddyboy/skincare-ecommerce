import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import treatmentRoutes from "./routes/treatmentRoutes";
import productRoutes from "./routes/productRoutes";
import blogRoutes from "./routes/blogRoutes";
import orderRoutes from "./routes/orderRoutes";
import cors from "cors";
import transactionRoutes from "./routes/transactionRoutes";
import webhookRoutes from "./routes/webhookRoutes";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", (req, res, next) => {
  console.log(req.path, req.method, new Date());
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/treatments", treatmentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/transaction", transactionRoutes);

// Webhook
app.use("/api/webhook", webhookRoutes);

mongoose
  .connect(process.env.URI!)
  .then((res) => {
    const dbName = res.connection.name;
    const server =
      res.connection.host === "localhost" ? "Local Server" : "Cloud Server";
    app.listen(process.env.PORT, () => {
      console.table({
        status: "Connected",
        port: process.env.PORT,
        server,
        database: dbName,
      });
    });
  })
  .catch((err) => {
    mongoose
      .connect("mongodb://localhost:27017/skincare-ecommerce")
      .then((res) => {
        const dbName = res.connection.name;
        const server =
          res.connection.host === "localhost" ? "Local Server" : "Cloud Server";
        app.listen(process.env.PORT, () => {
          console.table({
            status: "Connected",
            port: process.env.PORT,
            server,
            database: dbName,
            previousError: err.message,
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
