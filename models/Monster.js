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
    isDead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    moveset: {
      type: DataTypes.ARRAY,
      allowNull: false,
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