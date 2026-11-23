import helmet from "helmet";
import cors from "cors";
import express from "express";
import logger from "./middleware/logger.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(logger);

app.use("/api/products", productRoutes);

app.use(errorMiddleware);

export default app;
