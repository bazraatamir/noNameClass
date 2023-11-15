const blogSchema = require("../model/blogModel");
const comments = require("../model/comment");
exports.getAllBlogs = async (req, res) => {
  try {
    let posts = await blogSchema.find().populate("comments");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.createBlog = async (req, res) => {
  try {
    let post = await blogSchema.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getBlog = async (req, res) => {
  console.log(req.params.id);
  try {
    let posts = await blogSchema.findById(req.params.id);
    let comment = await comments.find({ blog: req.params.id });
    console.log(comment);
    res.status(200).json({ posts: posts,   comment: comment });
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteBlog = async (req, res) => {
  try {
    let posts = await blogSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.UpdateBlog = async (req, res) => {
  try {
    let posts = await blogSchema.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
