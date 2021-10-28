const router = require('express').Router();
const { validateToken } = require('../controllers/loginControllers');

const {
  isValidateEmailBinding,
  isisValidatePasswordBinding,
  invalidEmail,
  differentEmail,
  isValidatePassword,
} = require('../midllewares/validateLogin');

router.post('/',
  isValidateEmailBinding,
  isisValidatePasswordBinding,
  invalidEmail,
  differentEmail,
  isValidatePassword,
  validateToken);

module.exports = router; 