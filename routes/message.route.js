import express from "express";
const router = express.Router();
import { getUsersForSidebar } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { get } from "mongoose";


//routes
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/id:", protectRoute, getMessages);
router.post("/send/:id:", protectRoute, sendMessage);



export default router;
