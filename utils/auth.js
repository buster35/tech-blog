const auth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = auth;

//page authorization middleware we can inject so we don't have to use extra code @ route endpoints to check if user is logged in//