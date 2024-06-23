const pool = require('../config/db');

const Category = {
  async create(name) {
    const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query('SELECT * FROM categories');
    return result.rows;
  },
};

module.exports = Category;
