const router = require('express').Router();
const { Pokemon, Monster, Game, User, Level } = require('../models');

router.get('/', async (req, res) => {
  try {
    console.log(req.session.user_id);
    if (!req.session.user_id) {
      res.render('home');
      return;
    }
    const profileData = await User.findOne({
      where: {
        id: req.session.user_id
      },
      include: [
        {
          model: Pokemon,
        },
      ],
    });

    const profile = profileData.get({ plain: true });

    console.log(profile);
    res.render('profile', {
      profile: profile, loggedIn: req.session.loggedIn
    });
    // res.json(profileData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
