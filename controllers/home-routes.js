const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log('arrived at home route');
  res.render('home', { loggedIn: req.session.loggedIn });
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
