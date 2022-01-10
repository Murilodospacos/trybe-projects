const registerService = require('../services/registerService');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const role = 'customer';
    const result = await registerService.createNewUser(name, email, password, role);

    if (!result) {
      return res.status(404).json({ message: 'Invalid entries. Try again.' });
    }
    
    if (result.message) {
      return res.status(result.statusCode).json(result.message);
    }

    res.status(201).json(result);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
};
