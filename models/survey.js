'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    id: DataTypes.INTEGER,
    talk_id: DataTypes.INTEGER,
    speaker_id: DataTypes.INTEGER,
    spectator_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
  };
  return Survey;
};