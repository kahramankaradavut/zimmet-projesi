const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/unitsController');

router.post('/', unitsController.createUnit);
router.get('/', unitsController.getUnits);
router.get('/:id', unitsController.getUnitById);
router.put('/:id', unitsController.updateUnit);
router.delete('/:id', unitsController.deleteUnit);

module.exports = router;
