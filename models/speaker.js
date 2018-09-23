'use strict';
module.exports = (sequelize, DataTypes) => {
  const Speaker = sequelize.define('Speaker', {
    id: { type : DataTypes.INTEGER , primaryKey: true, autoIncrement: true, allowNull : false},
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    especialization: DataTypes.STRING
  }, {});
  Speaker.associate = function(models) {
    Speaker.hasMany(models.Speaker_Talk,{
      foreignKey: 'speaker_id',
      as : 'speaker_talks'
    });
  };
  return Speaker;
};