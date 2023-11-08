const mongoose = require('mongoose')
const Schema = mongoose.Schema
const blogSchema = new Schema({
    Title: {
        type: String,
        required:true
    }
})
module.exports = mongoose.model('blog',blogSchema)