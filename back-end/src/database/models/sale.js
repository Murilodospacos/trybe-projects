module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    'sales',
    { 
      userId: { type: DataTypes.INTEGER, field: 'user_id' },
      sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
      totalPrice: { type: DataTypes.DECIMAL(10, 2), field: 'total_price' },
      deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address' },
      deliveryNumber: { type: DataTypes.INTEGER, field: 'delivery_number' },
      saleDate: { type: DataTypes.DATEONLY, field: 'sale_date' },
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