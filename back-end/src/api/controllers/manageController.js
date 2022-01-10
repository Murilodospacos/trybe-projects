const manageService = require('../services/manageService');

const getAll = async (_req, res) => {
  try {
    const result = await manageService.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);  
  }
};

module.exports = { getAll };
