'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    hostId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      refrences: {model:"users"}
    },
    venueId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      refrences: {model:"venues"}
    },
    catagoryId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      refrences: {model:"groups"}
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE
    },
    capacity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
  }, {});
  event.associate = function(models) {
    event.belongsTo(models.User, {foreignKey:"hostId" })
    event.belongsTo(models.venue, {foreignKey:"venueId" })
    event.belongsTo(models.group, {foreignKey:"groupId" })
    event.hasMany(models.rsvp, { foreignKey: "eventId" });
  };
  return event;
};
