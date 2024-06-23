const Investment = require('../models/Investment');

exports.addInvestment = async (req, res) => {
  const { type, amount, purchase_date, description } = req.body;
  try {
    const investment = await Investment.create({
      user_id: req.user.id,
      type,
      amount,
      purchase_date,
      description,
    });
    res.json(investment);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getInvestments = async (req, res) => {
  try {
    const investments = await Investment.findByUserId(req.user.id);
    res.json(investments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
