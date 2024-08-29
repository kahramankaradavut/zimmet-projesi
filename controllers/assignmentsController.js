const Assignments = require('../models/Assignments');

const createAssignment = async (req, res) => {
  const { item_id, user_id, assignment_level } = req.body;
  try {
    const assignment = await Assignments.create(item_id, user_id, assignment_level);
    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignments.getAll();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAssignmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const assignment = await Assignments.getById(id);
    res.status(200).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAssignment = async (req, res) => {
  const { id } = req.params;
  const { item_id, user_id, assignment_level, status } = req.body;
  try {
    const assignment = await Assignments.update(id, item_id, user_id, assignment_level, status);
    res.status(200).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await Assignments.delete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAssignment,
  getAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment
};
