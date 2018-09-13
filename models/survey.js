'use strict';
module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define('Survey', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        talk_id: DataTypes.INTEGER,
        speaker_id: DataTypes.INTEGER,
        spectator_id: DataTypes.INTEGER,
        description: DataTypes.STRING,
        url: DataTypes.STRING
    }, {});
    Survey.associate = function(models) {
        // associations can be defined here
    };
    return Survey;
};