'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
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
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});
  Venue.associate = function(models) {
    Venue.hasMany(models.event, { foreignKey: "venueId" });
  };
  return Venue;
};
