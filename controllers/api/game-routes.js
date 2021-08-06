const router = require('express').Router();
const { Game } = require('../../models');

// GET all games
router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll();

    res.json(gameData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one game
router.get('/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id);

    // testing the route
    res.json(gameData);

    // For sending userData to login.handlebars
    // res.render('login', { userData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });

    // For testing
    res.json(gameData);

    // For when working with cookies
    // if (req.session.loggedIn) {
    //   req.session.destroy(() => {
    //     res.status(204).end();
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
