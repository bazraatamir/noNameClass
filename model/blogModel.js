const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogScheam = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("blogSchema", blogScheam);
