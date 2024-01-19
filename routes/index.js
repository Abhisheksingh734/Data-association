var express = require("express");
var router = express.Router();

const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/createuser", async function (req, res) {
  const usercreated = await userModel.create({
    username: "abhishek",
    fullname: "Abhishek Singh",
    email: "abhi@gmail.com",
    password: "abhishek",
  });

  res.send(usercreated);
});

router.get("/createpost", async function (req, res) {
  const postcreated = await postModel.create({
    postText: "Hey, second ",
    user: "65aabd3e1399fa2fcc7585c3",
  });

  const user = await userModel.findOne({ _id: "65aabd3e1399fa2fcc7585c3" });

  user.posts.push(postcreated._id);
  user.save();
  res.send("Post created ");
});

module.exports = router;
