'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      product_id: {
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quatity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};