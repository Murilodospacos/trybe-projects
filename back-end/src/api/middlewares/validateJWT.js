const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  validateJWT,
};
