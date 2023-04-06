"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const treatmentRoutes_1 = __importDefault(require("./routes/treatmentRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const cors_1 = __importDefault(require("cors"));
const transactionRoutes_1 = __importDefault(require("./routes/transactionRoutes"));
const webhookRoutes_1 = __importDefault(require("./routes/webhookRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", (req, res, next) => {
    console.log(req.path, req.method, new Date());
    next();
});
// Routes
app.use("/api/users", userRoutes_1.default);
app.use("/api/treatments", treatmentRoutes_1.default);
app.use("/api/products", productRoutes_1.default);
app.use("/api/blogs", blogRoutes_1.default);
app.use("/api/orders", orderRoutes_1.default);
app.use("/api/transaction", transactionRoutes_1.default);
// Webhook
app.use("/api/webhook", webhookRoutes_1.default);
mongoose_1.default
    .connect(process.env.URI)
    .then((res) => {
    const dbName = res.connection.name;
    const server = res.connection.host === "localhost" ? "Local Server" : "Cloud Server";
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
    mongoose_1.default
        .connect("mongodb://localhost:27017/skincare-ecommerce")
        .then((res) => {
        const dbName = res.connection.name;
        const server = res.connection.host === "localhost" ? "Local Server" : "Cloud Server";
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
