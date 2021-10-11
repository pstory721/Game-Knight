'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('groups', [
      {
        type:"Warhammer40KGame",
        description:"40k, 2k points with the boiz",
        file:null,
        createdAt: new Date(),
          updatedAt: new Date(),
      }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('groups', null, {});

  }
};
