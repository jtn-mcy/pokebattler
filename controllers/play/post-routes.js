const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findOne({
      where: {
        is_current: true,
      },
    });
    if (!dbPokemonData) {
      console.log('No pokemons that are current');
      return;
    }
    const pokemon = dbPokemonData.get({ plain: true });
    res.render('game_post', { pokemon });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
