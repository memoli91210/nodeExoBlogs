const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  titre: String,
  post: String,
});
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
