'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meal.hasMany(models.Foods, {
        foreignKey: 'meal_id'
      });
    }
  }
  Meal.init({
    descr_meal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meals',
  });
  return Meal;
};