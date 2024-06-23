const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
  const { amount, category_id, transaction_date, description } = req.body;
  try {
    const transaction = await Transaction.create({
      user_id: req.user.id,
      amount,
      category_id,
      transaction_date,
      description,
    });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findByUserId(req.user.id);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
