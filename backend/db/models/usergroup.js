'use strict';
module.exports = (sequelize, DataTypes) => {
  const userGroup = sequelize.define('userGroup', {
    userId: {
      type: Sequelize.INTEGER,
      refrences: {model:"users"}
    },
    groupId: {
      type: Sequelize.INTEGER,
      refrences: {model:"groups"}
    },
  }, {});
  userGroup.associate = function(models) {

  };
  return userGroup;
};
