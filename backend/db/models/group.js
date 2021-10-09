'use strict';
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    type: {
      allowNull: false,
      type: Sequelize.STRING
    },
  }, {});
  group.associate = function(models) {
   group.hasMany(models.event,{foreignKey:"catagoryId"})
   const columnMapping = {
    through: "userGroup",
    otherKey: "userId",
    foreignKey: "groupId",
  };
  group.belongsToMany(models.User, columnMapping)
  };
  return group;
};
