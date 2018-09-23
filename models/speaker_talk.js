'use strict';
module.exports = (sequelize, DataTypes) => {
  const Speaker_Talk = sequelize.define('Speaker_Talk', {
    speaker_id: DataTypes.INTEGER,
    talk_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Speaker_Talk.associate = function(models) {
    Speaker_Talk.belongsTo(models.Speaker);
    Speaker_Talk.belongsTo(models.Talk);
  };
  return Speaker_Talk;
};