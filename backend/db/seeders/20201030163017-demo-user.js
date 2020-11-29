'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: 'Demo',
        firstName: 'DemoLite',
        email: 'demo@test.com',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'FakerUser1',
        firstName: 'Faker1',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'FakerUser2',
        firstName: 'Faker2',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      userName: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
