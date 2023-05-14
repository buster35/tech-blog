const router = require('express').Router();
const User = require('../../models/User');

//api/users -> signup
router.get('/', (req, res) => { //working
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup'); //renders signup.handlebars
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    //define a new user session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ message: 'Thank you for signing up.' });
      return;
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//login event - looking for exact email and password match in db
router.post('/login', async (req, res) => { //working
  
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

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
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
    console.log(err) //this is current state
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