const router = require('express').Router();

const startRoutes = require('./start-routes');
const battleRoutes = require('./battle-routes');
const postRoutes = require('./post-routes');

router.use('/start', startRoutes);
router.use('/battle', battleRoutes);
router.use('/post', postRoutes);

module.exports = router;
