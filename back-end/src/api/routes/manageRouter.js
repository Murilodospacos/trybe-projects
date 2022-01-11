const router = require('express').Router();
const validations = require('../middlewares/validations');
const manageController = require('../controllers/manageController');

router.get('/', manageController.getAll);
router.post('/', validations.registerValidation, manageController.registerNewUser);

module.exports = router;
