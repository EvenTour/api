'use strict';
module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define('Staff', {
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
    Staff.associate = function(models) {

        Staff.belongsTo(models.Event,{
           foreignKey: 'event_id',
           as : 'events'
        });
    };
    return Staff;
};