module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    'sales',
    { 
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL(10,2),
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.INTEGER,
      sale_date: DataTypes.DATEONLY,
      status: DataTypes.STRING,
    }, {
      timestamps: false,
      tablename: 'sales',
    },     
  );
  //sale.associate = (models) => {
  //  sale.belongsTo( models.user, {
  //    foreignKey: 'id', as: 'user_id',
  //    foreignKey: 'id', as: 'seller_id'
  // })
  //}
  return sale;
};