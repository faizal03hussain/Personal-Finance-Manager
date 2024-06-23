const pool = require('../config/db');

const Budget = {
  async create(budget) {
    const { user_id, category_id, limit, period } = budget;
    const result = await pool.query(
      'INSERT INTO budgets (user_id, category_id, limit, period) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, category_id, limit, period]
    );
    return result.rows[0];
  },

  async findByUserId(user_id) {
    const result = await pool.query('SELECT * FROM budgets WHERE user_id = $1', [user_id]);
    return result.rows;
  },
};

module.exports = Budget;
