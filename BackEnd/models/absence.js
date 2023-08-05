"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class absence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  absence.init(
    {
      idEmployee: DataTypes.STRING,
      date: DataTypes.STRING,
      goIn: DataTypes.STRING,
      goOut: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "absence",
    }
  );
  return absence;
};
