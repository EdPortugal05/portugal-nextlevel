import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import gameRoutes from "./routes/games.js";

dotenv.config();

const app = express();

// --- Middleware ---
app.use(cors()); // Allows the React frontend (different port) to call this API
app.use(express.json()); // Lets Express read JSON request bodies

// --- Connect to MongoDB ---
connectDB();

// --- Routes ---
app.get("/", (req, res) => {
  res.send("Game Library API is running.");
});

app.use("/api/games", gameRoutes);

// --- Start server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
