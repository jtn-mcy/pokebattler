const { Game } = require('../models');

const gamedata = [
  {
    isCurrent: true,
    beat_game: false,
    score: 0,
    user_id: 1,
  },
];

const seedGallery = () => Game.bulkCreate(gamedata);

module.exports = seedGallery;