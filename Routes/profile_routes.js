import express from "express";

import { getProfile, updateProfile } from "../Controllers/profile_Controller.js";

const profileRoutes = express.Router();

profileRoutes.get('/:id', getProfile);
profileRoutes.put('/:id', updateProfile);


export default profileRoutes;