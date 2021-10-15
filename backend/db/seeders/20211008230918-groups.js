'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('groups', [
      {
        type:"Warhammer40KGame",
        description:"40k, 2k points with the boiz",
        file:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCnrlN6z_JnChd_BRna2PW0aUzjATQKDwrQ&usqp=CAU",
        ownerId:4,
        createdAt: new Date(),
          updatedAt: new Date(),
      }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('groups', null, {});

  }
};
