const loginService = require('../services/loginService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService.loginValidation(email, password);
    if (result.message) {
      return res.status(404).json({ message: 'Invalid entries. Try again.' });
    }
    res.status(200).json(result);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  login,
};
