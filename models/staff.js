'use strict';
module.exports = (sequelize, DataTypes) => {
    const staff = sequelize.define('staff', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        dni: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        event_id: DataTypes.INTEGER,
    }, {});
    staff.associate = function(models) {
        // associations can be defined here
    };
    return staff;
};