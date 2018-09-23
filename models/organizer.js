'use strict';
module.exports = (sequelize, DataTypes) => {
    const Organizer = sequelize.define('Organizer', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        urlImage : DataTypes.STRING,
        name: DataTypes.STRING,
        contactUrl: DataTypes.STRING,
        field: DataTypes.STRING,
        event_id: DataTypes.INTEGER
    }, {

    });

    return Organizer;
};