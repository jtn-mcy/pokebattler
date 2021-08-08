const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbGameData = await Game.findOne({
      where: {
        user_id: req.session.user_id,
        isCurrent: true,
      },
    });
    // console.log(dbGameData);
    if (!dbGameData) {
      res.render('game_start', { isCurrent: false });
    } else {
      //starts a new game
      const game = dbGameData.get({ plain: true });
      // console.log(game);
      // res.status(200).json(game);
      res.render('game_start', { game });
    }
  } catch (err) {
    res.status(500).json(err);
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
    console.log(pokemon);
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

// Create a new level
router.post('/levels', async (req, res) => {
  try {
    const newLevel = await Level.create({
      location: req.body.location,
      monster_left: req.body.monster_left,
      monsterTurn: req.body.monsterTurn,
      game_id: req.body.game_id,
    });

    // console.log('newLevel', newLevel);

    const level = newLevel.get({ plain: true });

    res.status(200).json(level);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
