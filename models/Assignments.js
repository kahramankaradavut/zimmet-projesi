const pool = require('../config/database');

const Assignments = {
  create: async (item_id, user_id, assignment_level) => {
    const result = await pool.query(
      `INSERT INTO Assignments (item_id, user_id, assignment_level) 
      VALUES ($1, $2, $3) RETURNING *`,
      [item_id, user_id, assignment_level]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM Assignments');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM Assignments WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, item_id, user_id, assignment_level, status) => {
    const result = await pool.query(
      `UPDATE Assignments SET item_id = $1, user_id = $2, assignment_level = $3, status = $4
       WHERE id = $5 RETURNING *`,
      [item_id, user_id, assignment_level, status, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM Assignments WHERE id = $1', [id]);
    return true;
  }
};

module.exports = Assignments;
