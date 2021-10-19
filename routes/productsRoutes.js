const router = require('express').Router();
const productsController = require('../controllers/productsControllers');

const { isValidName, isValidQuantity } = require('../midllewares/validateCreate');
const { isValidId } = require('../midllewares/validateGetById');

router.get('/:id', isValidId, productsController.getByIdProducts);
router.get('/', productsController.getAllProducts);
router.post('/', isValidName, isValidQuantity, productsController.createProducts);
router.put('/:id', isValidQuantity, isValidName, productsController.updateProducts);

module.exports = router;
