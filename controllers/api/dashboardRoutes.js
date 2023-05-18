const router = require('express').Router();
const { User, Blog } = require('../../models');
const auth = require("../../utils/auth");

router.get("/", auth, async (req, res) => {
  console.log("test")
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render({layout: "dashboard", user}, {logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

// api/dashboard/new

module.exports = router;