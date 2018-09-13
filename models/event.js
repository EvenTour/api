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

        Event.hasMany(models.Ticket,{
            foreignKey: 'event_id',
            as : 'tickets',
        });
        Event.hasMany(models.Organizer,{
           foreignKey: 'event_id',
           as : 'organizers'
        });

        Event.hasMany(models.Staff,{
           foreignKey: 'event_id',
           as : 'staffs'
        });

        Event.hasOne(models.Location,{
           foreignKey : 'event_id',
           as : 'location'
        });

        // TODO : CHANGE CLASS DIAGRAM 1 -- *
        Event.hasMany(models.Schedule,{
            foreignKey : 'event_id',
            as : 'schedules'
        });

    };
    return Event;
};