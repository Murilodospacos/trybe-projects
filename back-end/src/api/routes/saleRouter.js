const router = require('express').Router();
const saleController = require('../controllers/saleController');

router.get('/', saleController.sales);

module.exports = router;