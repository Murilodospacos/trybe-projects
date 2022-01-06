const registerService = require('../services/registerService');
const { users } = require('../../database/models');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const role = 'customer';
    const result = await registerService.createUser(name, email, password, role);

    const userExists = await users.findOne({ where: { email, password } });

    if (userExists) return res.status(409).json({ message: 'User already exists!' });

    if (!result) {
      return res.status(404).json({ message: 'Invalid entries. Try again.' });
    }

    res.status(201).json(result);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
};
