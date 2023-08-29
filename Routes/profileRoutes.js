import express from "express";

import { getProfile, updateProfile } from "../Controllers/profileController.js";

const profileRoutes = express.Router();

profileRoutes.get('/:id', getProfile);
profileRoutes.put('/:id', updateProfile);


export default profileRoutes;