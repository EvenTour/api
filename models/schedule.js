'use strict';
module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        event_id: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {});
    Schedule.associate = function(models) {
        Schedule.belongsTo(models.Event,{
           foreignKey : 'event_id',
           as : 'event'
        });

        Schedule.hasMany(models.Talk,{
            foreignKey: 'schedule_id',
            as : 'talks'
        })
    };
    return Schedule;
};