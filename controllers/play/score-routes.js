const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const dbPokemonData = await Pokemon.findOne({
//       where: {
//         is_current: true,
//       },
//     });
//     if (!dbPokemonData) {
//       console.log('No pokemons that are current');
//       return;
//     }
//     const pokemon = dbPokemonData.get({ plain: true });
//     res.render('game_score', { pokemon });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const dbBattleData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: Pokemon,
        },
        {
          model: Game,
          where: {
            isCurrent: true,
          },
          include: {
            model: Level,
            include: {
              model: Monster, //
            },
          },
        },
      ],
    });

    const post = dbBattleData.get({ plain: true }); //getting active user, game, and level
    const pokemon = post.pokemons[0];
    const level = post.games[0].levels[0]; //getting active level
    const monster = level.monsters[0]; //getting active monster
    // res.status(200).json({post, level, monster});
    console.log(level);
    res.status(200).render('game_score', { post, pokemon, level, monster });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game/:id', async (req, res) => {
  try{
    const dbGameData = await Game.findByPk(req.params.id);
    const game = dbGameData.get({ plain: true });

    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.put('/game/:id', async (req, res) => {
  try {
    const dbGameData = await Game.update(
      {
        isCurrent: req.body.isCurrent
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    console.log(dbGameData)
    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
