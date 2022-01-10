const router = require('express').Router();
const saleController = require('../controllers/saleController');

router.get('/', saleController.allSales);

module.exports = router;