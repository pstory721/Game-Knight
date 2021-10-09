'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('userGroups', [
        {
          userId:4,
          groupId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }

     ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('userGroups', null, {});

  }
};
