'use strict';
module.exports = (sequelize, DataTypes) => {
  const rsvp = sequelize.define('rsvp', {
    eventId: {
      type: DataTypes.INTEGER,
      refrences: {model:"events"}
    },
    userId: {
      type: DataTypes.INTEGER,
      refrences: {model:"users"}
    },
  }, {});
  rsvp.associate = function(models) {
    rsvp.belongsTo(models.User, { foreignKey: "userId" });

  };
  return rsvp;
};
