const registerService = require('../services/registerService');

const createUser = async (req, res) => {
  // console.log('CHEGUEI NO CONTROLLER');
  try {
    const role = 'customer';
    const result = await registerService.createNewUser({ ...req.body, role });
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
