const { Pokemon } = require('../models');

const pokemondata = [
  {
    name: 'pokemon1',
    description: 'desc1',
    hitpoints: '30',
    is_dead: false,
    move_one: 'mv1',
    move_two: 'mv2',
    move_three: 'mv3',
    move_four: 'mv4',
    sprite: 'sprite1',
    user_id: 1,
  },
];

const pokemon = () => Pokemon.bulkCreate(pokemondata);

module.exports = pokemon;
