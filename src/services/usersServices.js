const Users = require('../models/usersModels');

const getAllUsers = async () => {
  const data = await Sales.getAll();
  return data;
};

const createUsers = async (name, email, password) => {
  const usersExists = await Users.usersExists({ email });
  if(usersExists) return { error: 'Email_Exists' }
  const data = await Users.create(name, email, password);
  return data;
};

module.exports = {
  getAllUsers,
  createUsers
}