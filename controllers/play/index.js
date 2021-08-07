const router = require('express').Router();

<<<<<<< HEAD
const startRoutes = require('./start-routes');
const battleRoutes = require('./battle-routes');


router.use('/start', startRoutes)
router.use('/battle', battleRoutes);

module.exports = router;
=======
const battle = require('./battle-routes');
const play = require('./play-routes');
const post = require('./post-routes');
const score = require('./score-routes');
>>>>>>> 897a7ebd6f53eb752f9e18f70a3d9a95262c3555
