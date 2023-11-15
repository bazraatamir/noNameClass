const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema({
  comment: {
    type: String,
    require: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
  },
});

module.exports = mongoose.model("comment", commentSchema);
