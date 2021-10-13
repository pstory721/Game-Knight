'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    hostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      refrences: {model:"users"}
    },
    venueId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      refrences: {model:"Venues"}
    },
    catagoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      refrences: {model:"groups"}
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    capacity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  event.associate = function(models) {
    event.belongsTo(models.User, {foreignKey:"hostId" })
    event.belongsTo(models.Venue, {foreignKey:"venueId" })
    event.belongsTo(models.group, {foreignKey:"catagoryId" })
    event.hasMany(models.rsvp, { foreignKey: "eventId" });
  };
  return event;
};
