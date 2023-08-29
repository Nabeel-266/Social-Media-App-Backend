import express from "express";

import { login, registration } from "../Controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", registration);

export default authRoutes;
