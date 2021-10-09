'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Venues', [
        {
          name:"patricksBasement",
          address:"245 Old State Road",
          city:"Ellisville",
          state:"MO",
          zipCode:"63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        }



      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Venues', null, {});

  }
};
