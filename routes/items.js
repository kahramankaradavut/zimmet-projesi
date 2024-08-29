const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.post('/', itemsController.createItem);
router.get('/', itemsController.getItems);
router.get('/:id', itemsController.getItemById);
router.put('/:id', itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
