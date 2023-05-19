const router = require("express").Router();
const Blog = require("../../models");
const auth = require("../../utils/auth");

router.post("/", auth, async (req, res) => {
  console.log(req.body)
  try {
    const blogPost = await Blog.create({
      name: req.body.title,
      description: req.body.body,
    });
    res.status(200).json(blogPost);
  } catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;