import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/database.js";
import taskRoutes from "./routes/routes.js";

dotenv.config();

connectDb();

const PORT = process.env.PORT || 6000;

const app = express();
app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  return res.send("Server is up and running!!!");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
