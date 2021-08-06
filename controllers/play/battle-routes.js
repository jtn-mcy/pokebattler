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

        const post = dbBattleData.get({ plain: true });
        console.log(post);
        res.status(200).json(post)

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
