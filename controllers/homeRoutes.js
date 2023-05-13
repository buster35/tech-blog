const router = require("express").Router();
const { Blog, User } = require("../models");
const auth = require("../utils/auth");

//any route requests other than /api's running from homepage ("/") land here

//GET route on page load; get all stored blog data w/ username attached (from User table model)//
//TODO: debug
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

    const serializedData = blogData.map((data) => data.get({ plain: true }));

    res.render("homepage", {
      serializedData,
      logged_in: req.session.logged_in  
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => { //working
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login'); //renders login.handlebars
});

router.get("/dashboard", auth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('layouts/dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;















// WHEN I visit the site for the first time
// THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

// WHEN I click on the homepage option
// THEN I am taken to the homepage