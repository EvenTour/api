'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Speaker_Talks', {
      speaker_id: {
        type: Sequelize.INTEGER,
        references:{
          model : 'Speakers',
          key: 'id'
        }
      },
      talk_id: {
        type: Sequelize.INTEGER,
        references:{
          model : 'Talks',
          key: 'id'
        }
      },
      description: {
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
    return queryInterface.dropTable('Speaker_Talks');
  }
};