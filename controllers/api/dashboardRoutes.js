const router = require('express').Router();
const { User, Blog } = require('../../models');
const auth = require("../../utils/auth");

// api/dashboard/new
router.get("/new", auth, async (req, res) => {
  try {
    const newBlog = await User.findByPk(req.session.user_id, {});

    res.render("newpost", { layout: "dashboard", newBlog })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;