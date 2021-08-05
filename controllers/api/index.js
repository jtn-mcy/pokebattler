const router = require('express').Router();

const users = require('./user-routes');
// const pokemons = require('./pokemon-routes');
// const levels = require('./levels-routes');
// const monsters = require('./monster-routes');
// const games = require('./game-routes');

// router.use('./games', games);
// router.use('/levels', levels);
// router.use('/monsters', monsters);
// router.use('/pokemons', pokemons);
router.use('/users', users);

module.exports = router;
