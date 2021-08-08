const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const pokedexRoutes = require('./pokedex-routes');
const profileRoutes = require('./profile-routes');
const playRoutes = require('./play')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/pokedex', pokedexRoutes);
router.use('/profile', profileRoutes);
router.use('/play', playRoutes);

module.exports = router;
