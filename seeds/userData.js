const { User } = require('../models');

const userdata = [
  {
    username: 'user3',
    password: '12345678',
    gender: 'male',
    avatar:
      'https://static.wikia.nocookie.net/pokemon/images/5/57/Red_FireRed_and_LeafGreen.png',
  },
  {
    username: 'user4',
    password: 'ABC12345',
    gender: 'female',
    avatar:
      'https://static.wikia.nocookie.net/pokemon/images/0/01/Green_FireRed_and_LeafGreen.png',
  },
];

const user = () => User.bulkCreate(userdata);

module.exports = user;
