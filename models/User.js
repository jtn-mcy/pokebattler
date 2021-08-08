const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 20],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        len: [8, 50],
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 8);
        return newUserData;
      },
      async beforeBulkCreate(newUsersData) {
        for (var each of newUsersData) {
          each.password = await bcrypt.hash(each.password, 8);
        }
        return newUsersData;
      },
    },
    // hooks: {
    //   async beforeBulkCreate(newUsersData) {
    //     for (var each of newUsersData) {
    //       each.password = await bcrypt.hash(each.password, 8);
    //     }
    //     return newUsersData;
    //   },
    // },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
