const router = require('express').Router();
const salesController = require('../controllers/salesControllers');
const { isValidateSale, isValidateQuantity } = require('../midllewares/ValidateSale');

router.get('/:id', salesController.getByIdSales);
router.get('/', salesController.getAllSales);
router.post('/', isValidateQuantity, isValidateSale, salesController.createSales);
router.put('/:id', isValidateQuantity, salesController.updateSales);
router.delete('/:id', salesController.deleteSales);

module.exports = router;
