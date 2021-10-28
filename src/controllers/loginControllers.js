const jwt = require('jsonwebtoken');
const UsersLogin = require('../models/loginModels');

const secret = 'seusecretdetoken';

const validateToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UsersLogin.usersLoginExists({ email, password }); 
    const jwtConfig = {
      algorithm: 'HS256',
      expiresIn: '7d',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    /* Por fim, nós devolvemos essa informação ao usuário. */
    res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = { validateToken };
