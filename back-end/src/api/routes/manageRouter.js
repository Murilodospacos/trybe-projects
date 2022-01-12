const router = require('express').Router();
const validations = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/validateJWT');
const manageController = require('../controllers/manageController');

const postValidations = [validations.adminRegisterValidation, validateJWT];

router.get('/', manageController.getAll);
router.post('/', postValidations, manageController.registerNewUser);
router.delete('/:id', manageController.deleteUser);

module.exports = router;
