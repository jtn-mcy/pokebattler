const router = require('express').Router();

const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');
// const pokedexRoutes = require('./pokedex-routes');
const profileRoutes = require('./profile-routes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/pokedex', pokedexRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
