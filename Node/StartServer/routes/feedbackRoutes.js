const express = require('express');
const router = express.Router();
const feedbackControllers = require('../controllers/feedbackControllers');

router.get('/:id',feedbackControllers.getFeedbackById);


module.exports = router;