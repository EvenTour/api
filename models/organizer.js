'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organizer = sequelize.define('Organizer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: DataTypes.STRING,
    contactUrl: DataTypes.STRING,
    field: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {});
  Organizer.associate = function(models) {
    // TODO : associations can be defined here
  };
  return Organizer;
};