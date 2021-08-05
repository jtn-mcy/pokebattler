const router = require('express').Router();
const { Pokedex } = require('../models');

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
    const pokemonData = await Pokedex.findByPk(req.params.id);

    res.render('pokedex', { pokemonData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
