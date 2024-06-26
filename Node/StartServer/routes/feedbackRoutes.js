const express = require('express');
const router = express.Router();
const feedbackControllers = require('../controllers/feedbackControllers');

router.get('/:id',feedbackControllers.getFeedbackById);
router.post('/:user_id', feedbackControllers.createFeedback);


module.exports = router;