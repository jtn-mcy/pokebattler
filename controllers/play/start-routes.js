const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbGameData = await Game.findOne({
      where: {
        user_id: 1,
        isCurrent: true,
      },
    });

    if (!dbGameData) {
      res.render('game_start', { isCurrent: false });
    } //starts a new game
    const game = dbGameData.get({ plain: true });
    console.log(game);
    // res.status(200).json(game);
    res.render('game_start', { game });
  } catch (err) {
    req.status(500).json(err);
  }
});

//CREATE NEW STARTER POKEMON
router.post('/pokemons', async (req, res) => {
  try {
    const newPokemon = await Pokemon.create({
      name: req.body.name,
      description: req.body.description,
      hitpoints: req.body.hitpoints,
      is_current: true,
      move_one: req.body.move_one,
      sprite: req.body.sprite,
      user_id: req.session.user_id,
    });

    const pokemon = newPokemon.get({ plain: true });
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
