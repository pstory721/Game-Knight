'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('groups', [
      {
        type:"Warhammer40KGame",
        createdAt: new Date(),
          updatedAt: new Date(),
      }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('groups', null, {});

  }
};
