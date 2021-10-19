const router = require('express').Router();
const productsController = require('../controllers/productsControllers');

const { isValidName, isValidQuantity } = require('../midllewares/validateParams');

router.get('/', productsController.getAllProducts);
router.post('/', isValidName, isValidQuantity, productsController.createProducts);

module.exports = router;
