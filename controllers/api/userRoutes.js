const router = require("express").Router();
const User = require("../../models/User");

//api/users -> get signup form
router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/"); //example of the controller not needing to communicate w/ model
    return;
  }
  res.render("signup"); //renders signup.handlebars
});

//api/users -> create a new user
//receiving post request from signup.js
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    //define a new user session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//login event - looking for exact email and password match in db; good//
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
   
    const userTrim = userData.get({ plain: true })

    if (!userData) {
      res.status(404).json(err);
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json(err);
      return;
    }

    //define a new user session
    req.session.save(() => {
      req.session.user_id = userTrim.id;
      req.session.logged_in = true;
    
      return res.json({userTrim, message: "You are now logged in!"})
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logout and "destroy" the stored user session
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
