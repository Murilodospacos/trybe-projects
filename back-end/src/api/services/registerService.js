const md5 = require('md5');
const { users } = require('../../database/models');

const createUser = async (name, email, password, role) => {
  const hashPassword = md5(password);

  const newUser = await users.create({ name, email, password: hashPassword, role });

  if (!newUser) return ({ message: 'Invalid fields' });

  return { user: { name, email, password: hashPassword, role, token: email } };
};

module.exports = {
  createUser,
};
