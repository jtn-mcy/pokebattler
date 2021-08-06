const router = require('express').Router();
const { Pokemon } = require('../../models');

// GET all pokemons for pokedex page
router.get('/', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll({});

    if (!pokemonData) {
      res.status(404).json({ message: 'No pokemon found with that id!' });
      return;
    }

    res.status(200).json(pokemonData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single pokemon
router.get('/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id);

    if (!pokemonData) {
      res.status(404).json({ message: 'No pokemon found with that id!' });
      return;
    }

    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates book based on its isbn
router.put('/:id', (req, res) => {
  // Calls the update method on the Book model
  Book.update(
    {
      // All the fields you can update and the data attached to the request body.
      hitpoints: req.body.hitpoints,
      is_dead: req.body.is_dead,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPokemon) => {
      // Sends the updated book as a json response
      res.json(updatedPokemon);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
