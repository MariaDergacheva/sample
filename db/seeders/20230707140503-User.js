'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Маша',
          email: 'marey.d@yandex.ru',
          hash:await bcrypt.hash('12345', 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Катя',
          email: 'm.d@yandex.ru',
          hash:await bcrypt.hash('12345', 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
