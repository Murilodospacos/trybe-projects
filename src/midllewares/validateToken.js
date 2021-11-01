const secret = 'seusecretdetoken';
const jwt = require('jsonwebtoken');

const isValidateToken = (req, res, next) => {
const token = req.headers.authorization;
if (!token) {
  return res.status(401).json({ message: 'jwt malformed' }); 
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' }); 
  }
}; 

module.exports = { isValidateToken };
