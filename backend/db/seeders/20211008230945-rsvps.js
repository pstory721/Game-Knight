'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('rsvps', [
        {
          eventId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('rsvps', null, {});

  }
};
