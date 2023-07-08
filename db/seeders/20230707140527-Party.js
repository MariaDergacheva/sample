'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Parties',
      [
        {
          name: 'Cвадьба',
          time: new Date('December 17, 2024 03:24:00'),
          location:'Москва',
          userId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'День рождения',
          time: new Date('December 10, 2024 17:24:00'),
          location:'Астана',
          userId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Parties', null, {});
  }
};
