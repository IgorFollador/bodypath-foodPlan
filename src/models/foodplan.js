'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foodplan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Foodplan.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      });
      Foodplan.belongsTo(models.Professionals, {
        foreignKey: 'professional_id'
      });
      Foodplan.hasMany(models.Foods, {
        foreignKey: 'foodPlan_id'
      });
    }
  }
  Foodplan.init({
    bmr: DataTypes.DOUBLE,
    body_mass: DataTypes.DOUBLE,
    calor_variation: DataTypes.DOUBLE,
    carbohydrate: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    fat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Foodplans',
  });
  return Foodplan;
};