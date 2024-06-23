const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, investmentController.addInvestment);
router.get('/', authMiddleware, investmentController.getInvestments);

module.exports = router;
