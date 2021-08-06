const { Monster } = require('../models');

const monsterdata = [
  {
    name: 'Darkrai',
    description: 'Dark',
    hitpoints: Math.floor(Math.random() * (20) + 80),
    is_dead: false,
    move_one: "tackle",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    level_id: 1,
  },
];

const seedGallery = () => Monster.bulkCreate(monsterdata);

module.exports = seedGallery;