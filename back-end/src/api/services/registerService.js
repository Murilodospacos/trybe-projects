const md5 = require('md5');
const { users } = require('../../database/models');

const createNewUser = async (name, email, password) => {
  // console.log('CHEGUEI NA SERVICE');
  const role = 'customer';
  const hashPassword = md5(password);

  const userExists = await users.findOne({ where: { name, email, password: hashPassword } });
  if (userExists) return { statusCode: 409, message: 'User already exists!' };

  const newUser = await users.create({ name, email, password: hashPassword, role });

  if (!newUser) return ({ message: 'Invalid fields' });

  return { name, email, password: hashPassword, role };
};

module.exports = {
  createNewUser,
};
