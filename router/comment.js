const express = require("express");
const {
  getAllComments,
  createComment,
  getComment,
  deleteComment,
  UpdateComment,
} = require("../controller/commentController");
const router = express.Router();
router.get("/getAllComments", getAllComments);
router.post("/createComment", createComment);
router.get("/getComment/:id", getComment);
router.delete("/deleteComment/:id", deleteComment);
router.put("/updateComment/:id", UpdateComment);

module.exports = router;
