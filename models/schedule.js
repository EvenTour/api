'use strict';
module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        event_id: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {});
    Schedule.associate = function(models) {
        // associations can be defined here
    };
    return Schedule;
};