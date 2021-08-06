const router = require('express').Router();
const { Level } = require('../../models');

// GET all levels
router.get('/', async (req, res) => {
  try {
    const levelData = await Level.findAll();

    res.json(levelData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one level
router.get('/:id', async (req, res) => {
  try {
    const levelData = await Level.findByPk(req.params.id);

    // testing the route
    res.json(levelData);

    // For sending userData to login.handlebars
    // res.render('login', { userData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update one level
router.put('/:id', async (req, res) => {
  try {
    const levelData = await Level.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(levelData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const levelData = await Level.destroy({
      where: {
        id: req.params.id,
      },
    });

    // For testing
    res.json(levelData);

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
