const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models')

router.get('/', async (req, res) => {
    try{
        const dbBattleData = await User.findOne({
            where: {
                username: 'user1',
            },
            include: [
                {
                    model: Pokemon
                },
                {
                    model: Game,
                    where: {
                        current: true
                    },
                    include: {
                        
                        model: Level,
                        include: {
                            model: Monster //
                        }

                    }
                }
            ],
        });

        const post = dbBattleData.get({ plain: true }); //getting active user, game, and level
        const pokemon = post.pokemons[0];
        const level = post.games[0].levels[0]; //getting active level
        const monster = level.monsters[0]; //getting active monster
        // res.status(200).json({post, level, monster});
        console.log(level);
        res.status(200).render('game_battle', { post, pokemon, level, monster })

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
