import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized -No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if(!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }
    req.user = user; // Attach the user to the request object for use in subsequent middleware or route handlers.
    next();
  } catch (err) {
    console.error("Error in protect route middleware:", err); // Log the error for debugging purposes.
    res.status(500).json({ message: "Internal Server Error" });
  }
};
