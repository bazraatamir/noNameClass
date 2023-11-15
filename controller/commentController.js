const comment = require("../model/comment");
const CommentSchema = require("../model/comment");
exports.getAllComments = async (req, res) => {
  try {
    let posts = await CommentSchema.find().populate("blog");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.createComment = async (req, res) => {
  try {
    let post = await CommentSchema.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getComment = async (req, res) => {
  try {
    let posts = await CommentSchema.findById(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteComment = async (req, res) => {
  try {
    let posts = await CommentSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.UpdateComment = async (req, res) => {
  try {
    let posts = await CommentSchema.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};
