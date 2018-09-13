'use strict';
module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false },
        event_id: DataTypes.INTEGER,
        address: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {});
    Location.associate = function(models) {
        // TODO : associations can be defined here
    };
    return Location;
};