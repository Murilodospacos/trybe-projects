const router = require('express').Router();
const validations = require('../middlewares/validations');
const loginController = require('../controllers/loginController');

router.post('/login', validations.loginValidate, loginController.login);

module.exports = router;
