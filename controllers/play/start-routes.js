const router = require('express').Router();
const { User, Pokemon, Game, Level, Monster } = require('../../models')

//CREATE NEW STARTER POKEMON
router.post('/pokemons', async (req, res) => {
    try{
        const newPokemon = await Pokemon.create({
            name: req.body.name,
            description: req.body.description,
            hitpoints: req.body.hitpoints,
            is_current: true,
            move_one: req.body.move_one,
            sprite: req.body.sprite,
            user_id: req.session.id,
        });

        const pokemon = newPokemon.get({ plain: true });
        res.status(200).json(pokemon)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;