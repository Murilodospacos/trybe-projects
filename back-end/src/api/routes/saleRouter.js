const router = require('express').Router();
const saleController = require('../controllers/saleController');

router.get('/', saleController.allSales);
router.get('/:id', saleController.salesByUserId);
router.get('/order/:id', saleController.saleOrderDetails);
// router.post('/', saleController.newOrder);

module.exports = router;