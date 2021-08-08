const router = require('express').Router();
const { Game } = require('../../models');

// CREATE A NEW GAME
router.post('/games', async (req, res) => {
  try {
    const newGame = await Game.create({
      isCurrent: true,
      beat_game: false,
      score: 0,
      user_id: req.session.user_id,
    });

    const game = newGame.get({ plain: true });

    // console.log('game', game);
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
