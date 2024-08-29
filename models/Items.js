const pool = require('../config/database');

const Items = {
  create: async (name, description, unit_id, category_id, barcode, brand, model, specifications) => {
    const result = await pool.query(
      `INSERT INTO Items (name, description, unit_id, category_id, barcode, brand, model, specifications)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [name, description, unit_id, category_id, barcode, brand, model, specifications]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM Items');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM Items WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, name, description, unit_id, category_id, barcode, brand, model, specifications) => {
    const result = await pool.query(
      `UPDATE Items SET name = $1, description = $2, unit_id = $3, category_id = $4, 
      barcode = $5, brand = $6, model = $7, specifications = $8 WHERE id = $9 RETURNING *`,
      [name, description, unit_id, category_id, barcode, brand, model, specifications, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM Items WHERE id = $1', [id]);
    return true;
  }
};

module.exports = Items;
