const blogschema = require("../model/blogModel");
exports.getBlog = async (req, res) => {};
exports.postBlog = async (req, res) => {
  const blogData = req.body;
  console.log(blogData);
  const data = await blogschema.create(blogData);
  res.send(data);
};
