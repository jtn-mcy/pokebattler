const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedGame = require('./gameData');
const seedLevel = require('./levelData');
const seedMonster = require('./monsterData');
const seedPokemon = require('./pokemonData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedGame();

  await seedLevel();

  await seedMonster();

  await seedPokemon();

  process.exit(0);
};

seedAll();
