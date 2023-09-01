import express from "express";

import {
  getProfile,
  updateProfile,
  deleteProfile,
  followProfile,
  unFollowProfile,
} from "../Controllers/profileController.js";

const userRoutes = express.Router();

// Get User Profile
userRoutes.get("/:id", getProfile);

// Update Your Profile
userRoutes.put("/:id", updateProfile);

// Delete Your Profile
userRoutes.delete("/:id", deleteProfile);

// Follow Other User Profile
userRoutes.put("/:id/follow", followProfile);

// Unfollow Other User Profile
userRoutes.put("/:id/unfollow", unFollowProfile);

export default userRoutes;
