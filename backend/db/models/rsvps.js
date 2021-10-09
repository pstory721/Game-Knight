'use strict';
module.exports = (sequelize, DataTypes) => {
  const rsvp = sequelize.define('rsvp', {
    eventId: {
      type: Sequelize.INTEGER,
      refrences: {model:"events"}
    },
    userId: {
      type: Sequelize.INTEGER,
      refrences: {model:"users"}
    },
  }, {});
  rsvp.associate = function(models) {
    rsvp.belongsTo(models.User, { foreignKey: "userId" });

  };
  return rsvps;
};
