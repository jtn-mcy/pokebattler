const router = require('express').Router();
const { Pokemon, Monster, User } = require('../models');

// GET all pokemons for pokedex page
router.get('/', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll({
      include: [
        {
          model: User,
          attributes: [
            'username',
          ]
        }
      ] 
    });

    const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

    console.log(pokemons);

    res.render('pokedex', {
      pokemons: pokemons,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one pokemon for pokedex page
router.get('/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id);

    res.render('pokedex', { pokemonData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all monsters for pokedex page
router.get('/', async (req, res) => {
  try {
    const monsterData = await Monster.findAll();

    const monsters = monsterData.map((monster) => monster.get({ plain: true }));

    console.log(monsters);

    res.render('pokedex', { monsters });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one monster for pokedex page
router.get('/:id', async (req, res) => {
  try {
    const monsterData = await Monster.findByPk(req.params.id);

    res.render('pokedex', { monsterData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
