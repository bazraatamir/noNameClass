const mongoose = require("mongoose");
const comment = require("./comment");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    require: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

module.exports = mongoose.model("blog", blogSchema);
