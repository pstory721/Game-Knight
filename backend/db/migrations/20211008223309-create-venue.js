'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.DECIMAL
      },
      lng: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Venues');
  }
};
