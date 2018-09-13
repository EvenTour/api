'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Talks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      schedule_id: {
        type: Sequelize.INTEGER
      },
      survey_id: {
        type: Sequelize.INTEGER
      },
      space_id: {
        type: Sequelize.INTEGER
      },
      speaker_id: {
        type: Sequelize.INTEGER
      },
      topic: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      startHour: {
        type: Sequelize.STRING
      },
      endHour: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Talks');
  }
};