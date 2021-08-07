const { Level } = require('../models');

const leveldata = [
  {
    location: "location1",
    monster_left: 1,
    game_id: 1,
    monsterTurn: false,
  },
];

const seedGallery = () => Level.bulkCreate(leveldata);

module.exports = seedGallery;