const router = require('express').Router();
const validations = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/validateJWT');
const manageController = require('../controllers/manageController');

router.get('/', manageController.getAll);
router.post('/', validations.registerValidation, validateJWT, manageController.registerNewUser);

module.exports = router;
