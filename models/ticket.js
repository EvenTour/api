'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    event_id: DataTypes.INTEGER,
    spectator_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};