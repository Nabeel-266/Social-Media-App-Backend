import express from "express";

import {
  createPost,
  updatePost,
  deletePost,
  postLike,
  getPost,
  userPosts,
  timelinePosts,
} from "../Controllers/postController.js";

const postRoutes = express.Router();

// Create Post
postRoutes.post("/", createPost);

// Update Post
postRoutes.put("/:id", updatePost);

// Delete Post
postRoutes.delete("/:id", deletePost);

// Like a Post
postRoutes.put("/:id/like", postLike);

// Get a Post
postRoutes.get("/:id", getPost);

// Get a Specific User Posts
postRoutes.get("/", userPosts);

// Get a Specific User Timeline Posts
postRoutes.get("/timeline/all", timelinePosts);

export default postRoutes;
