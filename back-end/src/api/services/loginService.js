// const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { users } = require('../../database/models');

const loginValidation = async (email, password) => {
  const hashPassword = md5(password);
  const userExists = await users.findOne({ where: { email, password: hashPassword } });

  if (!userExists) return ({ message: 'Invalid fields' });

  // const createToken = jwt.sign({
  //   id: userExists.id,
  //   email: userExists.email,
  //   role: userExists.role,
  // }, process.env.JWT_SECRET);
  
  // return { token: createToken };
  return { token: email };
};

module.exports = {
  loginValidation,
};
