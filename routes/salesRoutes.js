const router = require('express').Router();
const salesController = require('../controllers/salesControllers');
const { isValidate } = require('../midllewares/validateUpdate');

router.get('/:id', salesController.getByIdSales);
router.get('/', salesController.getAllSales);
router.post('/', salesController.createSales);
router.put('/:id', isValidate, salesController.updateSales);
router.delete('/:id', salesController.deleteSales);

module.exports = router;
