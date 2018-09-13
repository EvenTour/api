'use strict';
module.exports = (sequelize, DataTypes) => {
    const Space = sequelize.define('Space', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        location_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    Space.associate = function(models) {
        Space.belongsTo(models.Location,{
            foreignKey : 'location_id',
            as : 'location'
        });

        Space.hasOne(models.Talk,{
           foreignKey: 'talk_id',
           as : 'talk'
        });
    };
    return Space;
};