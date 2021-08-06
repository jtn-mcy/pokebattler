const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    password: '12345678',
    gender: 'male',
    avatar: 'avatar link',
  },
];

const user = () => User.bulkCreate(userdata);

module.exports = user;
