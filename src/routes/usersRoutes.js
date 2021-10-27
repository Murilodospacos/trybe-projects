const router = require('express').Router();
const usersControllers = require('../controllers/usersControllers');
const { 
  isValidateName,
  isValidateEmail,
  isValidatePassword
} = require('../midllewares/validateUsers')

router.get('/', usersControllers.getAllUsers);
router.post('/', isValidateName, isValidateEmail, isValidatePassword, usersControllers.createUsers);

module.exports = router;