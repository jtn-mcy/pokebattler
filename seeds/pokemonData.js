const { Pokemon } = require('../models');

const pokemondata = [
  {
    name: 'Bulbasaur',
    description: 'Grass',
    hitpoints: Math.floor(Math.random() * (20) + 80),
    is_dead: false,
    move_one: "tackle",
    move_two: "swords dance",
    move_three: "cut",
    move_four: "bind",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    user_id: 1,
  },
  {
    name: 'Charmander',
    description: 'Fire',
    hitpoints: Math.floor(Math.random() * (20) + 80),
    is_dead: false,
    move_one: "tackle",
    move_two: "fire punch",
    move_three: "thunder punch",
    move_four: "scratch",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    user_id: 2,
  },
  {
    name: 'Squirtle',
    description: 'Water',
    hitpoints: Math.floor(Math.random() * (20) + 80),
    is_dead: false,
    move_one: "tackle",
    move_two: "ice punch",
    move_three: "mega kick",
    move_four: "headbutt",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    user_id: 3,
  },
];

const seedGallery = () => Pokemon.bulkCreate(pokemondata);

module.exports = seedGallery;
