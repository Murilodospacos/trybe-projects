const Users = require('../models/loginModels');

const error = 'Incorrect username or password';

const isValidateEmailBinding = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(401).json({ message: 'All fields must be filled' });
    }
  next(); 
};

const isisValidatePasswordBinding = async (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }
  next();
};

const invalidEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(401).json({ message: error });
    }
  next();
};

const differentEmail = async (req, res, next) => {
  const { email } = req.body;
  const validateUserEmail = await Users.usersLoginExists({ email });
  if (!validateUserEmail || validateUserEmail === null) {
    return res.status(401).json({ message: error });
  }
  if (email !== validateUserEmail.email) {
    return res.status(401).json({ message: error });
  }
  next();
};

const isValidatePassword = async (req, res, next) => {
  const { email, password } = req.body;
  const validateUserPassword = await Users.usersLoginExists({ email });
  if (validateUserPassword === null || !validateUserPassword) {
    return res.status(401).json({ message: error });
  }
  if (password !== validateUserPassword.password) {
    return res.status(401).json({ message: error });
  }

  next();
};

module.exports = {
  isValidateEmailBinding,
  isisValidatePasswordBinding,
  invalidEmail,
  differentEmail,
  isValidatePassword,
};