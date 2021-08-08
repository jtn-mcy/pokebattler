const router = require('express').Router();

const startRoutes = require('./start-routes');
const battleRoutes = require('./battle-routes');
const playRoutes = require('./play-routes');

router.use('/start', startRoutes);
router.use('/battle', battleRoutes);
router.use('/play', playRoutes);

module.exports = router;
