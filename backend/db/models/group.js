'use strict';
module.exports = (sequelize, DataTypes) => {
  // const fs = require('fs');
  // const imageData = fs.readFileSync('/path/to/file');
  const group = sequelize.define('group', {
    type: {
      allowNull: false,
      type:DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    file: {
      type: DataTypes.BLOB('long')
    },
  }, {});
  // Image.create({
  //   data: imageData
  // }).then(image => {
  //   try{
  //     fs.writeFileSync('/path/to/file', image.data);
  //   }catch(e){
  //     console.log(e);
  //   }
  // })
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
