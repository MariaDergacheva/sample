'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserParties',
      [
        {
          userId:1,
          partyId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId:2,
          partyId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserParties', null, {});
  }
};
