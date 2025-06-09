// routes/blogPosts.js
const express = require("express");
const router = express.Router();
const BlogPost = require("../models/BlogPost");

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blog post
router.post("/", async (req, res) => {
  const post = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Other CRUD operations (GET by ID, Update by ID, Delete by ID) can be similarly implemented

module.exports = router;
