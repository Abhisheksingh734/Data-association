const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/kuchTohKarungaIska");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", // Assuming you have a 'Post' model for user posts
    },
  ],
  dp: {
    type: String, // You can adjust this based on how you store profile pictures
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
