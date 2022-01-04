module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  }, { timestamps: false, tableName: 'products' });

  Product.associate = (models) => {
    Product.hasMany(models.salesProducts, { foreignKey: 'product_id', as: 'user' });
  };

  return Product;
};