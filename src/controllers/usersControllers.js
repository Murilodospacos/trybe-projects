const Users = require('../services/usersServices');

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

const createUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = await Users.createUsers(name, email, password);
    if (user.error && user.error === 'Email_Exists') {
      return res.status(409).json({
        message: 'Email already registered',
      })
    }
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = {
  getAllUsers,
  createUsers
}