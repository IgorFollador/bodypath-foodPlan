'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('foodplans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bmr: {
        type: Sequelize.DOUBLE
      },
      weight: {
        type: Sequelize.DOUBLE
      },
      calor_variation: {
        type: Sequelize.DOUBLE
      },
      carbohydrate: {
        type: Sequelize.INTEGER
      },
      protein: {
        type: Sequelize.INTEGER
      },
      fat: {
        type: Sequelize.INTEGER
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' }
      },
      professional_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Professionals', key: 'id' }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('foodplans');
  }
};