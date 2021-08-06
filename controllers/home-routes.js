const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log('arrived at home route');
  res.render('home');
});

module.exports = router;
