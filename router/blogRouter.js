const express = require("express");
const router = express.Router();
const { getBlog, postBlog } = require("../controller/blogController");

router.get("/", getBlog);
router.post("/createBlog", postBlog);
module.exports = router;
