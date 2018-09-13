'use strict';
module.exports = (sequelize, DataTypes) => {
    const Spectator = sequelize.define('Spectator', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        dni: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        interests: DataTypes.STRING
    }, {});
    Spectator.associate = function(models) {
        // associations can be defined here
    };
    return Spectator;
};