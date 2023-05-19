const router = require("express").Router();
const { Blog, User } = require("../models");
const auth = require("../utils/auth");

//any route requests other than /api's running from homepage ("/") land here

//GET route on page load; get all stored blog data w/ username attached (from User table model)//
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogPosts = blogData.map((data) => data.get({ plain: true }));

    res.render("homepage", {blogPosts});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", auth, async (req, res) => {
    // Find the logged in user's blog data based on the session ID
    try {
      const blogData = await Blog.findAll({
        where: req.session.user_id = User.id,
      });
  
      const userBlogs = blogData.map((data) => data.get({ plain: true }));

    res.render("userBlogs", { layout: "dashboard", userBlogs });

  } catch (err) {
    res.status(500).json(err);
  }});

router.get("/dashboard/new", auth, async (req, res) => {
    res.render("newpost", { layout: "dashboard"})
    return;
});

router.get('/login', (req, res) => { //working
  // If the user is already logged in, redirect the request to another route

  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login'); //renders login.handlebars
});

module.exports = router;
