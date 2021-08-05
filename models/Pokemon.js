const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon',
  }
);

module.exports = Pokemon;