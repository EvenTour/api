'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Organizers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urlImage :{
        type : Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      contactUrl: {
        type: Sequelize.STRING
      },
      field: {
        type: Sequelize.STRING
      },
      event_id: {
        type: Sequelize.INTEGER,
          references:{
              model : 'Events',
              key: 'id'
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Organizers');
  }

};