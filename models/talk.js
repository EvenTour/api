'use strict';
module.exports = (sequelize, DataTypes) => {
    const Talk = sequelize.define('Talk', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        schedule_id: DataTypes.INTEGER,
        space_id: DataTypes.INTEGER,
        speaker_id: DataTypes.INTEGER,
        topic: DataTypes.STRING,
        description: DataTypes.STRING,
        startHour: DataTypes.STRING,
        endHour: DataTypes.STRING,
        date: DataTypes.STRING
    }, {});
    Talk.associate = function(models) {
        Talk.belongsTo(models.Space,{
           foreignKey : 'space_id',
           as : 'space'
        });

        Talk.belongsTo(models.Schedule,{
            foreignKey: 'schedule_id',
            as : 'schedule'
        });

/*
        Talk.belongsToMany(models.Speaker,{
            through : true,
            foreignKey: 'speaker_id',
            as : 'speakers'
        });
*/

        Talk.hasOne(models.Survey,{
            foreignKey: 'talk_id',
            as : 'survey'
        });
    };
    return Talk;
};