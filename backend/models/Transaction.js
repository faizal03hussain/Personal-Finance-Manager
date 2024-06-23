const pool = require('../config/db');

const Transaction = {
  async create(transaction) {
    const { user_id, amount, category_id, transaction_date, description } = transaction;
    const result = await pool.query(
      'INSERT INTO transactions (user_id, amount, category_id, transaction_date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, amount, category_id, transaction_date, description]
    );
    return result.rows[0];
  },

  async findByUserId(user_id) {
    const result = await pool.query('SELECT * FROM transactions WHERE user_id = $1', [user_id]);
    return result.rows;
  },
};

module.exports = Transaction;
