"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          hostId: 4,
          venueId: 1,
          catagoryId: 1,
          name: "WarhammerWithTheBois",
          date: new Date(),
          capacity: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  },
};
