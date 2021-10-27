const isValidateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const isValidateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
    } if (!email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
    next(); 
};

const isValidatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

// const isValidateToken = (req, res, next) => {
// const token = req.headers.authorization;
// if (token === '' || token === undefined) {
//   return res.status(401).json({ message: 'Token não encontrado' }); 
//   }
//   if (token.length !== 16) {
//     return res.status(401).json({ message: 'Token inválido' }); 
//   }
//   next();
// }; 

module.exports = {
  isValidateName,
  isValidateEmail,
  isValidatePassword,
};
