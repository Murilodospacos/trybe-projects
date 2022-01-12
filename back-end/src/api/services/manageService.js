const md5 = require('md5');
// const jwt = require('jsonwebtoken');
const { users } = require('../../database/models');

// const secret = process.env.JWT_SECRET;

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const getAllUsers = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};

const createNewUser = async (name, email, password, role) => {
  // const role = 'customer';
  const hashPassword = md5(password);

  const userExists = await users.findOne({ where: { name, email, password: hashPassword } });
  if (userExists) return { statusCode: 409, message: 'Conflict' };

  const newUser = await users.create({ name, email, password: hashPassword, role });

  if (!newUser) return ({ message: 'Invalid fields' });

  // const token = jwt.sign({ email }, secret, jwtConfig);

  return { name, email, password: hashPassword };
};

const deleteOneUser = async (id) => {
  await users.destroy({ where: { id } });
  return { statusCode: 204, message: 'User successfully deleted!' };
};

module.exports = { getAllUsers, createNewUser, deleteOneUser };
