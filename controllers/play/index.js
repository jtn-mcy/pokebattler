const router = require('express').Router();

const startRoutes = require('./start-routes');
const battleRoutes = require('./battle-routes');

router.use('/start', startRoutes);
router.use('/battle', battleRoutes);

module.exports = router;
