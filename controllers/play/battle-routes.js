const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models');

router.get('/', async (req, res) => {
  console.log('req.session', req.session);

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
              model: Monster,
              where: {
                is_dead: false,
              },
            },
          },
        },
      ],
    });

    // console.log('dbBattleData', dbBattleData);

    const post = dbBattleData.get({ plain: true }); //getting active user, game, and level
    const pokemon = post.pokemons[0];
    const level = post.games[0].levels[0]; //getting active level
    const monster = level.monsters[0]; //getting active monster
    // res.status(200).json({post, level, monster});
    // console.log('level', level);
    res.status(200).render('game_battle', { post, pokemon, level, monster });
  } catch (err) {
    console.log(err);
  }
});

router.get('/pokemons/:id', async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findByPk(req.params.id);

    post = dbPokemonData.get({ plain: true });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Monster  gets damaged
router.put('/monsters/:id', async (req, res) => {
  try {
    const dbMonsterData = await Monster.update(
      {
        hitpoints: req.body.hitpoints,
        is_dead: req.body.is_dead,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(dbMonsterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//pokemon gets damaged
router.put('/pokemons/:id', async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.update(
      {
        hitpoints: req.body.hitpoints,
        is_dead: req.body.is_dead,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(dbPokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/levels/:id', async (req, res) => {
  try {
    const dbLevelData = await Level.update(
      {
        monsterTurn: req.body.monsterTurn,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // res.status(200).json(dbLevelData);
    res.status(200).render('game_battle');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/levels_monster/:id', async (req, res) => {
  try {
    const dbLevelData = await Level.update(
      {
        monster_left: req.body.monster_left,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(dbLevelData);
    // res.status(200).render('game_battle');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
