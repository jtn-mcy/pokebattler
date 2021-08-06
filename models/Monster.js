const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model {}

Monster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hitpoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_dead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    move_one: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    move_two: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    move_three: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    move_four: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'level',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'monster',
  }
);

module.exports = Monster;
