const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log('arrived at home route');
  console.log(req.session.loggedIn);
  res.render('home', { loggedIn: req.session.loggedIn, username: req.session.username });
});

router.get('/login', async (req, res) => {
  console.log('req.session.loggedIn', req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
