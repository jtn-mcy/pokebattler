const router = require('express').Router();

const startRoutes = require('./start-routes');
const battleRoutes = require('./battle-routes');
const playRoutes = require('./play-routes');
const postRoutes = require('./post-routes');
const scoreRoutes = require('./score-routes');

router.use('/start', startRoutes);
router.use('/battle', battleRoutes);
router.use('/play', playRoutes);
router.use('/post', postRoutes);
router.use('/score', scoreRoutes);

module.exports = router;
