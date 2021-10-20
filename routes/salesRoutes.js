const router = require('express').Router();
const salesController = require('../controllers/salesControllers');

router.get('/:id', salesController.getByIdSales);
router.get('/', salesController.getAllSales);
router.post('/', salesController.createSales);
router.post('/:id', salesController.updateSales);

module.exports = router;
