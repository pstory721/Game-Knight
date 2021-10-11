'use strict';
module.exports = (sequelize, DataTypes) => {
  const userGroup = sequelize.define('userGroup', {
    userId: {
      type: DataTypes.INTEGER,
      refrences: {model:"users"}
    },
    groupId: {
      type: DataTypes.INTEGER,
      refrences: {model:"groups"}
    },
  }, {});
  userGroup.associate = function(models) {

  };
  return userGroup;
};
