const router = require('express').Router();
const saleController = require('../controllers/saleController');

router.get('/', saleController.allSales);
router.get('/:id', saleController.salesById);

module.exports = router;
