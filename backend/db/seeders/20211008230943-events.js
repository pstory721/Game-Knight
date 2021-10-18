"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          hostId: 1,
          venueId: 1,
          catagoryId: 1,
          name: "Necrons VS SpaceMarines who triumpths?",
          date: new Date(),
          capacity: 6,
          file:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fK_3UxFY5cuT4Zcru1zxCpRSXd_Ll3xc4A&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostId: 1,
          venueId: 1,
          catagoryId: 1,
          name: "Tyranids rule",
          date: new Date(),
          capacity: 6,
          file:"https://warhammerart.com/wp-content/uploads/2017/11/Tyranids.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hostId: 4,
          venueId: 1,
          catagoryId: 1,
          name: "We hate Space Marines",
          date: new Date(),
          capacity: 6,
          file:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3n9tBKzyHfa17l6MTaOdc-qAmTbYeaDssg&usqp=CAU",
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
