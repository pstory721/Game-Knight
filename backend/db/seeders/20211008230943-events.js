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
          name: "Necrons VS SpaceMarines who triumpths?",
          date: new Date(),
          capacity: 6,
          file:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fK_3UxFY5cuT4Zcru1zxCpRSXd_Ll3xc4A&usqp=CAU",
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
