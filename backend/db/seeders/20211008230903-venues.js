"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Venues",
      [
        {
          name: "patricksBasement",
          address: "245 Old State Road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darkside",
          address: "3312 manchester road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Games Workshop",
          address: "3312 manchester road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "V-stock",
          address: "3312 manchester road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Joes place",
          address: "3312 manchester road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sams house",
          address: "3312 manchester road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "King Bzilliams castle",
          address: "3312 manchester road",
          city: "Ellisville",
          state: "MO",
          zipCode: "63011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Venues", null, {});
  },
};
