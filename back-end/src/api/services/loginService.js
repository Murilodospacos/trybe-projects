const jwt = require('jsonwebtoken');
const { users } = require('../../database/models');
const md5 = require('md5')

const loginValidation = async (email, password) => {
  const hashPassword = md5(password)
  console.log(hashPassword);
  const userExists = await users.findOne({ where: { email, password: hashPassword } });

  if (!userExists) return ({ message: 'Invalid fields' });

  const createToken = jwt.sign({
    id: userExists.id,
    email: userExists.email,
    role: userExists.role,
  }, process.env.JWT_SECRET);
  
  return { token: createToken };
};

module.exports = {
  loginValidation,
}