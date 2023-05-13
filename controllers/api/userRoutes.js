const router = require('express').Router();
const { User } = require('../../models');

//might have to change some of this to match with the functionality of the blog site//
//api/users
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

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

//login event - looking for exact email and password match in db
router.post('/login', async (req, res) => {
  console.log("working");
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    //define a new user session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json(response);
      res.render("dashboard");
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//logout and "destroy" the stored user session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;