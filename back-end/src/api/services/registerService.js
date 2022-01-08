const md5 = require('md5');
const { users } = require('../../database/models');
const LoginService = require('./loginService');

const createNewUser = async ({ name, email, password, role }) => {
  const hashPassword = md5(password);
  try {
    const userExists = await users.findOne({ where: { name, email } });
    console.log(userExists);
    if (userExists) return { statusCode: 409, message: 'User already exists!' };
  
    const newUser = await users.create({ name, email, password: hashPassword, role });
  
    if (!newUser) return ({ message: 'Invalid fields' });
  
    const loginNewUserRegister = LoginService.loginValidation(email, password);
  
    return loginNewUserRegister;
    
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = {
  createNewUser,
};
