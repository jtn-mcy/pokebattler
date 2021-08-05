const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Level extends Model {}

Level.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monster_left: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    game_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'game',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'level',
  }
);

module.exports = Level;