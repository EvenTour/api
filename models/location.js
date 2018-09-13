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
        Location.belongsTo(models.Event,{
            foreignKey:'event_id',
            as : 'event'
        });

        Location.hasMany(models.Space,{
            foreignKey : 'location_id',
            as : 'spaces'
        });
    };
    return Location;
};