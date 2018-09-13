'use strict';
module.exports = (sequelize, DataTypes) => {
  const spectator = sequelize.define('spectator', {
    id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    interests: DataTypes.STRING
  }, {});
  spectator.associate = function(models) {
    // associations can be defined here
  };
  return spectator;
};