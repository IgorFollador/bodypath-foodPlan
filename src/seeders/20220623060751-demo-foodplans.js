'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foodplans', [
      {
        bmr: 1840,
        calor_variation: 800,
        carbohydrate: 1,
        protein: 2,
        fat: 1,
        client_id: 1,
        professional_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bmr: 2028,
        calor_variation: 500,
        carbohydrate: 1,
        protein: 2,
        fat: 1,
        client_id: 2,
        professional_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bmr: 1391,
        calor_variation: 800,
        carbohydrate: 1,
        protein: 2,
        fat: 1.5,
        client_id: 3,
        professional_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foodplans', null, {});
  }
};
