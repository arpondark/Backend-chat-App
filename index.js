import express from "express";
import dotenv from "dotenv";
import http from "http";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import messageRoutes from "./routes/message.route.js";
import { initializeSocket } from "./lib/socket.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Initialize Socket.IO
const io = initializeSocket(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
