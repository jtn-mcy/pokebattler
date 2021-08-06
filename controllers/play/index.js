const router = require('express').Router();

const battleRoutes = require('./battle-routes');



router.use('/battle', battleRoutes);

module.exports = router;
