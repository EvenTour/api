'use strict';
module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {
        id: { type : DataTypes.INTEGER , primaryKey: true, autoIncrement: true, allowNull : false},
        urlImage : DataTypes.STRING,
        event_name: DataTypes.STRING,
        startDate: DataTypes.STRING,
        endDate: DataTypes.STRING,
        duration: DataTypes.INTEGER
    }, {
        classMethods :{
            associate : function (models) {
                Event.hasMany(models.Organizer,{
                    foreignKey: 'event_id',
                    as : 'organizers'
                });
            }
        }
    });



    return Event;
};