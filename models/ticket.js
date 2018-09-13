'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        event_id: DataTypes.INTEGER,
        spectator_id: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {});
    Ticket.associate = function(models) {
        Ticket.belongsTo(models.Event,{
            foreignKey : 'event_id',
            as : 'event'
        });

        Ticket.belongsTo(models.Spectator,{
            foreignKey : 'spectator_id',
            as : 'spectator'
        });
    };
    return Ticket;
};