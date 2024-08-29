const pool = require('../config/database');

const Users = {
  create: async (name, email) => {
    const result = await pool.query(
      'INSERT INTO Users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM Users');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM Users WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, name, email) => {
    const result = await pool.query(
      'UPDATE Users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM Users WHERE id = $1', [id]);
    return true;
  }
};

module.exports = Users;
