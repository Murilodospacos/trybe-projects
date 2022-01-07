const router = require('express').Router();
const validations = require('../middlewares/validations');
const registerController = require('../controllers/registerController');

router.post('/', validations.registerValidation, registerController.createUser);

module.exports = router;
