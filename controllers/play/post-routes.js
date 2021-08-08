const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models');

router.get('/', async (req, res) => {
    try {
        res.render('game_post');
    } catch (err) {
        console.log(err);
    }
} )

module.exports = router;
