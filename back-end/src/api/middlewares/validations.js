const Joi = require('joi');

const loginValidate = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(5).max(200),
  });
  const { error } = schema.validate(req.body);
  if (error && error.details.find((erro) => (erro))) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const registerValidation = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(12).max(100),
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(6).max(200),
  });
  const { error } = schema.validate(req.body);
  if (error && error.details.find((erro) => (erro))) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  
  next();
};

module.exports = {
  loginValidate,
  registerValidation,
};
