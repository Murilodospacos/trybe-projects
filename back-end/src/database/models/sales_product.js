module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('saleproduct',
  {
    quantity: DataTypes.INTEGER
  }, 
  { timestamps: false, tableName: 'sales_products' });

  saleProduct.associate = (models) => {
   models.products.belongsToMany(models.sales, {
     as: 'sales',
     through: saleProduct,
     foreignKey: 'product_id',
     otherKey: 'sale_id',
   });
   models.sales.belongsToMany(models.products, {
    as: 'products',
     through: saleProduct,
     foreignKey: 'sale_id',
     otherKey: 'product_id',
   });
  };

  return saleProduct;
};