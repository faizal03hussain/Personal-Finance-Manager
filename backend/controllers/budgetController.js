const Budget = require('../models/Budget');

exports.setBudget = async (req, res) => {
  const { category_id, limit, period } = req.body;
  try {
    const budget = await Budget.create({
      user_id: req.user.id,
      category_id,
      limit,
      period,
    });
    res.json(budget);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.findByUserId(req.user.id);
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
