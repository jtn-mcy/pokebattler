const router = require('express').Router();
const { Pokemon } = require('../models/Pokemon');
const { Monster } = require('../models/Monster');

// GET all pokemons for pokedex page
router.get('/', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll({});

    res.render('pokedex', {
      pokemonData,
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
    const monsterData = await Monster.findAll({});

    res.render('pokedex', { monsterData });
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
