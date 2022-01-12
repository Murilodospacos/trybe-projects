const manageService = require('../services/manageService');

const getAll = async (_req, res) => {
  try {
    const result = await manageService.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);  
  }
};

const registerNewUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const result = await manageService.createNewUser(name, email, password, role);

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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await manageService.deleteOneUser(id);
    
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);  
  }
};

module.exports = { getAll, registerNewUser, deleteUser };
