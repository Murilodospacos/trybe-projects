const router = require('express').Router();
const manageController = require('../controllers/manageController');

router.get('/', manageController.getAll);

module.exports = router;
