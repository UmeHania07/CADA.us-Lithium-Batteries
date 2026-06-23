import express from "express";
import { adminLogin } from "../controllers/userController.js";

const userRouter = express.Router();

// Sirf admin login ka route rakha hai, baqi sab khatam!
userRouter.post("/admin", adminLogin);

export default userRouter;