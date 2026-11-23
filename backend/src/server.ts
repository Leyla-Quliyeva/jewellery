import helmet from "helmet";
import cors from "cors";
import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());



const PORT = 5000;

app.use("/api/products", productRoutes);

import { db } from "./config/firebase.js";

db.collection("test").get()
  .then(() => console.log("Firebase connection successful!"))
  .catch((error) => console.error("Firebase connection error:", error));


app.listen(PORT, () => {
  console.log("server basladi", PORT);
});
