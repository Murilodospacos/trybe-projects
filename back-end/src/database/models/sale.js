module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    'sales',
    { 
      userId: { type: DataTypes.INTEGER, columnName: 'user_id' },
      sellerId: { type: DataTypes.INTEGER, columnName: 'seller_id' },
      totalPrice: { type: DataTypes.DECIMAL(10, 2), columnName: 'total_price' },
      deliveryAddress: { type: DataTypes.STRING, columnName: 'delivery_address' },
      deliveryNumber: { type: DataTypes.INTEGER, columnName: 'delivery_number' },
      saleDate: { type: DataTypes.DATEONLY, columnName: 'sale_date' },
      status: DataTypes.STRING,
    }, {
      timestamps: false,
      tablename: 'sales',
    },     
  );
  // sale.associate = (models) => {
  //  sale.belongsTo( models.user, {
  //    foreignKey: 'id', as: 'user_id',
  //    foreignKey: 'id', as: 'seller_id'
  // })
  // }
  return sale;
};