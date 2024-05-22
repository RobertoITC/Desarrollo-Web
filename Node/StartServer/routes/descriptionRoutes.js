const express = require('express');
const router = express.Router();
const descriptionController = require('../controllers/descriptionControllers');

router.get('/:id',descriptionController.getDescriptionById);
router.post('/:userd_id',descriptionController.createDescription);


module.exports = router;