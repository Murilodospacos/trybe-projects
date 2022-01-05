module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('saleproduct',
  {
    quantity: DataTypes.INTEGER
  }, 
  { timestamps: false, tableName: 'sales_products' });

  //saleProduct.associate = (models) => {
  //  models.product.belongsToMany(models.Sale, {
  //    as: 'sale_id',
  //    through: saleProduct,
  //    foreignKey: 'product_id',
  //    otherKey: 'sale_id',
  //  });
  //  models.sale.belongsToMany(models.Product, {
  //   as: 'product_id',
  //    through: saleProduct,
  //    foreignKey: 'sale_id',
  //    otherKey: 'product_id',
  //  });
  //};

  return saleProduct;
};