'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plan.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      });
      Plan.belongsTo(models.Professionals, {
        foreignKey: 'professional_id'
      });
      Plan.hasMany(models.Foods, {
        foreignKey: 'plan_id'
      });
    }
  }
  Plan.init({
    bmr: DataTypes.DOUBLE,
    calor_variation: DataTypes.DOUBLE,
    carbohydrate: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    fat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Plans',
  });
  return Plan;
};