const router = require('express').Router();
const { Pokemon, Monster, Game, User, Level } = require('../models');

router.get('/', async (req, res) => {
  try {
    const profileData = await User.findAll({
      include: [
<<<<<<< HEAD
        {
          model: Pokemon,
=======
        {
          model: Game,
          attributes: ['score'],
        },
        {
          model: Pokemon,
          // attributes: ['name'],
>>>>>>> 897a7ebd6f53eb752f9e18f70a3d9a95262c3555
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
