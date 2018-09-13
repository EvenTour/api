'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: { type : DataTypes.INTEGER , primaryKey: true, autoIncrement: true, allowNull : false},
    event_name: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // TODO : associations can be defined here
  };
  return Event;
};