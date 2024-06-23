const pool = require('../config/db');

const Investment = {
  async create(investment) {
    const { user_id, type, amount, purchase_date, description } = investment;
    const result = await pool.query(
      'INSERT INTO investments (user_id, type, amount, purchase_date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, type, amount, purchase_date, description]
    );
    return result.rows[0];
  },

  async findByUserId(user_id) {
    const result = await pool.query('SELECT * FROM investments WHERE user_id = $1', [user_id]);
    return result.rows;
  },
};

module.exports = Investment;
