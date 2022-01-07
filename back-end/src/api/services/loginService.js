const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { users } = require('../../database/models');
const fs = require('fs');

const loginValidation = async (email, password) => {
  const hashPassword = md5(password);
  const userExists = await users.findOne({ where: { email, password: hashPassword } });
  console.log(userExists)

  if (!userExists) return ({ message: 'Invalid fields' });
  const key = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

  const createToken = jwt.sign({
    id: userExists.id,
    email: userExists.email,
    role: userExists.role,
  }, key);
  console.log(createToken)

  return { userExists, token: createToken };
};

module.exports = {
  loginValidation,
};
