const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPokemon = require('./pokemonData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPokemon();

  process.exit(0);
};

seedAll();
