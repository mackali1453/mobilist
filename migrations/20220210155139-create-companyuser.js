'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('companyusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_user_first_name: {
        type: Sequelize.STRING
      },
      company_user_last_name: {
        type: Sequelize.STRING
      },
      company_user_cell_number: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('companyusers');
  }
};