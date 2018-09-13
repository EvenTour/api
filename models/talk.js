'use strict';
module.exports = (sequelize, DataTypes) => {
  const Talk = sequelize.define('Talk', {
    id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER,
    space_id: DataTypes.INTEGER,
    speaker_id: DataTypes.INTEGER,
    topic: DataTypes.STRING,
    description: DataTypes.STRING,
    startHour: DataTypes.STRING,
    endHour: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  Talk.associate = function(models) {
    // associations can be defined here
  };
  return Talk;
};