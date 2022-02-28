const Users = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'user' });
  };

  return user;
};

module.exports = Users;