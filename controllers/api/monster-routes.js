const router = require('express').Router();
const { Monster } = require('../../models');

// GET all monsters
router.get('/', async (req, res) => {
  try {
    const monsterData = await Monster.findAll();

    res.json(monsterData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one monster
router.get('/:id', async (req, res) => {
  try {
    const monsterData = await Monster.findByPk(req.params.id);

    // testing the route
    res.json(monsterData);

    // For sending userData to login.handlebars
    // res.render('login', { userData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new monster
router.post('/', async (req, res) => {
  try {
    const monsterData = await Monster.create({
      name: req.body.name,
      description: req.body.description,
      hitpoints: req.body.hitpoints,
      is_dead: false,
      move_one: req.body.move_one,
      sprite: req.body.sprite,
      level_id: req.body.level_id,
    });

    const monster = monsterData.get({ plain: true });

    res.status(200).json(monster);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update one monster
router.put('/:id', async (req, res) => {
  try {
    const monsterData = await Monster.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(monsterData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const monsterData = await Monster.destroy({
      where: {
        id: req.params.id,
      },
    });

    // For testing
    res.json(monsterData);

    // For when working with cookies
    // if (req.session.loggedIn) {
    //   req.session.destroy(() => {
    //     res.status(204).end();
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
