'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};