module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'users',
    { 
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    }, {
      timestamps: false,
      tablename: 'users',
    },     
  );
  return user;
};