'use strict';
module.exports = (sequelize, DataTypes) => {
    const Talk = sequelize.define('Talk', {
      id: { type : DataTypes.INTEGER , primaryKey: true, autoIncrement: true, allowNull : false},
      event_id: DataTypes.INTEGER,
      topic: DataTypes.STRING,
      description: DataTypes.STRING,
      startHour: DataTypes.STRING,
      endHour: DataTypes.STRING,
      date: DataTypes.DATE
    }, {});

    Talk.associate = function(models) {

      Talk.belongsTo(models.Event);

      Talk.hasMany(models.Speaker_Talk,{
        foreignKey: 'talk_id',
        as : 'speaker_talks'
      });
    };
    return Talk;
};