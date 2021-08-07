const router = require('express').Router();
const { Pokemon, Monster, Game, User, Level } = require('../models');

router.get('/', async (req, res) => {
  try {
    const profileData = await User.findAll({
      include: [
        {
          model: Pokemon,
        },
      ],
    });

    const profile = profileData.map((profile) => profile.get({ plain: true }));

    console.log(profile);
    res.render('profile', {
      profile: profile,
    });
    // res.json(profileData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
