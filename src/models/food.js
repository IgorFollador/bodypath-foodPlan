'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.belongsTo(models.Foodplans, {
        foreignKey: 'foodPlan_id'
      });
      Food.belongsTo(models.Meals, {
        foreignKey: 'meal_id'
      });
    }
  }
  Food.init({
    unit: DataTypes.DOUBLE,
    nutriment_id: DataTypes.INTEGER,
    descr_nutirment: DataTypes.STRING,
    carbohydrate: DataTypes.DOUBLE,
    protein: DataTypes.DOUBLE,
    lipid: DataTypes.DOUBLE,
    kcal: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Foods',
  });
  return Food;
};