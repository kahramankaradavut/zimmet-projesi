const pool = require('../config/database');

const Units = {
  create: async (name, description) => {
    const result = await pool.query(
      'INSERT INTO Units (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM Units');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM Units WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, name, description) => {
    const result = await pool.query(
      'UPDATE Units SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM Units WHERE id = $1', [id]);
    return true;
  }
};

module.exports = Units;
