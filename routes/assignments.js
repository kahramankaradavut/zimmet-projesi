const express = require('express');
const router = express.Router();
const assignmentsController = require('../controllers/assignmentsController');

router.post('/', assignmentsController.createAssignment);
router.get('/', assignmentsController.getAssignments);
router.get('/:id', assignmentsController.getAssignmentById);
router.put('/:id', assignmentsController.updateAssignment);
router.delete('/:id', assignmentsController.deleteAssignment);

module.exports = router;
