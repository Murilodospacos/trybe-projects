const router = require('express').Router();
const salesController = require('../controllers/salesControllers');

router.get('/', salesController.getAllSales);
router.post('/', salesController.createSales);

module.exports = router;
