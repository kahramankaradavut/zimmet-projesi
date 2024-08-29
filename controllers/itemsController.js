const Items = require('../models/Items');

const createItem = async (req, res) => {
  const { name, description, unit_id, category_id, barcode, brand, model, specifications } = req.body;
  try {
    const item = await Items.create(name, description, unit_id, category_id, barcode, brand, model, specifications);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Items.getAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Items.getById(id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, unit_id, category_id, barcode, brand, model, specifications } = req.body;
  try {
    const item = await Items.update(id, name, description, unit_id, category_id, barcode, brand, model, specifications);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Items.delete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem
};
