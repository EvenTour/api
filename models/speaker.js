'use strict';
module.exports = (sequelize, DataTypes) => {
  const speaker = sequelize.define('speaker', {
    id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    specialization: DataTypes.STRING
  }, {});
  speaker.associate = function(models) {
    // associations can be defined here
  };
  return speaker;
};