const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlog,
  deleteBlog,
  UpdateBlog,
} = require("../controller/blogController");
const router = express.Router();
router.get("/getAllBlogs", getAllBlogs);
router.post("/createPost", createBlog);
router.get("/getBlog/:id", getBlog);
router.delete("/deleteBlog/:id", deleteBlog);
router.put("/updateBlog/:id", UpdateBlog);

module.exports = router;
