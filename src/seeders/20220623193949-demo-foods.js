'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foods', [
      {
        unit: 1,
        descr_nutirment: "Arroz, tipo 1, cozido",
        carbohydrate: 28,
        protein: 2.5,
        lipid: 0.2,
        nutriment_id: 3,
        foodPlan_id: 1,
        meal_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        unit: 1,
        descr_nutirment: "Arroz, tipo 1, cozido",
        carbohydrate: 28,
        protein: 2.5,
        lipid: 0.2,
        nutriment_id: 3,
        foodPlan_id: 1,
        meal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        unit: 1,
        descr_nutirment: "Cereal matinal, milho",
        carbohydrate: 83.82,
        protein: 7.15,
        lipid: 0.95,
        nutriment_id: 3,
        foodPlan_id: 1,
        meal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foods', null, {});
  }
};
