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
      },
      {
        type:"D&D",
        description:"if you join us your gurenteed a nat 20 i swear",
        file:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lcps.org%2Fdomain%2F29342&psig=AOvVaw1DCh56qnvnNZG_qcjLA4Ju&ust=1634616191688000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCJjG4v6J0_MCFQAAAAAdAAAAABAD",
        ownerId:1,
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        type:"Red Dragon inn",
        description:"We actually drink in the game and irl",
        file:"https://ksr-ugc.imgix.net/assets/019/591/022/cd977019e801d334b9badb4a92efa555_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1513195177&auto=format&frame=1&q=92&s=0e0600e3a48a20d472ffffd734fe1bf2",
        ownerId:1,
        createdAt: new Date(),
          updatedAt: new Date(),
      }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('groups', null, {});

  }
};
