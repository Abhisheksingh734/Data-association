const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
