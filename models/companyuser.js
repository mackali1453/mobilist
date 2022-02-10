'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companyuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companyuser.init({
    company_user_first_name: DataTypes.STRING,
    company_user_last_name: DataTypes.STRING,
    company_user_cell_number: DataTypes.STRING,
    company_name: DataTypes.STRING,
    user_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companyuser',
  });
  return companyuser;
};