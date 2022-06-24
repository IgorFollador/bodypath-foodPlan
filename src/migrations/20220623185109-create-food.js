'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Foods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.DOUBLE
      },
      descr_nutirment: {
        type: Sequelize.STRING
      },
      carbohydrate: {
        type: Sequelize.DOUBLE
      },
      protein: {
        type: Sequelize.DOUBLE
      },
      lipid: {
        type: Sequelize.DOUBLE
      },
      nutriment_id: { 
        type: Sequelize.INTEGER,
        // References TACO API
      },
      foodPlan_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Foodplans', key: 'id' }
      },
      meal_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Meals', key: 'id' }
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
    await queryInterface.dropTable('Foods');
  }
};