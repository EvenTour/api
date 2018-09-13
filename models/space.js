'use strict';
module.exports = (sequelize, DataTypes) => {
  const Space = sequelize.define('Space', {
    id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Space.associate = function(models) {
    // associations can be defined here
  };
  return Space;
};