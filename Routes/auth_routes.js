import express from "express";

import { login, registration } from "../Controllers/auth_Controller.js";

const authRoutes = express.Router();

authRoutes.post('/login', login)
authRoutes.post('/register', registration);


export default authRoutes;