module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products'
  });
  product.associate = (models) => {
   product.hasMany(models.sales_products, { foreignKey: 'product_id', as: 'products' });
  };

  return product;
};