'use strict';
module.exports = (sequelize, DataTypes) => {
    const Speaker = sequelize.define('Speaker', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        dni: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        bio: DataTypes.STRING,
        specialization: DataTypes.STRING
    }, {});
    Speaker.associate = function(models) {
        Speaker.hasOne(models.Survey,{
            foreignKey: 'speaker_id',
            as : 'survey'
        });

        Speaker.hasOne(models.Talk,{
            foreignKey: 'speaker_id',
            as : 'talk'
        });
    };
    return Speaker;
};