'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meals', [
      {
        descr_meal: "Refeição I - Café da manhã",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_meal: "Refeição II - Lanche da manhã",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_meal: "Refeição III - Almoço",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_meal: "Refeição IV - Lanche da tarde",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_meal: "Refeição V - Janta",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meals', null, {});
  }
};
