'use strict';
module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {
        id: { type : DataTypes.INTEGER , primaryKey: true, autoIncrement: true, allowNull : false},
        urlImage : DataTypes.STRING,
        event_name: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        duration: DataTypes.INTEGER
    }, {});

    event.associate = function (models) {
        Event.hasMany(models.Organizer,{
            foreignKey: 'event_id',
            as : 'organizers'
        });

        Event.hasMany(models.Talk,{
            foreignKey: 'event_id',
            as : 'talks'
        });
    }

    return Event;
};