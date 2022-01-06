const registerService = require('../services/registerService');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const result = await registerService.createUser(name, email, password);
    console.log('result', result);

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
