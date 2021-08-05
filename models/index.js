const User = require('./User');
const Game = require('./Game');
const Level = require('./Level');
const Monster = require('./Monster');
const Pokemon = require('./Pokemon');

User.hasMany(Pokemon, {
    foreignKey: 'user_id',
});

User.hasMany(Game, {
    foreignKey: 'user_id',
});

Pokemon.hasMany(User, {
    foreignKey: 'user_id',
});

Level.hasMany(Monster, {
    foreignKey: 'level_id',
});

Monster.belongsTo(Level, {
    foreignKey: 'level_id',
});

Game.belongsTo(User, {
    foreignKey: 'user_id',
});

Monster.BelongsToMany(Game, {
    //foreignKey: '_id',
});

module.exports = { User, Game, Level, Monster, Pokemon };
