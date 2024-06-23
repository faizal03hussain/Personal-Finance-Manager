import React, { useState } from 'react';
import budgetService from '../services/budgetService';

const Budget = () => {
  const [category_id, setCategoryId] = useState('');
  const [limit, setLimit] = useState('');
  const [period, setPeriod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await budgetService.setBudget({ category_id, limit, period });
      alert('Budget set successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category ID</label>
        <input
          type="text"
          value={category_id}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Limit</label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Period</label>
        <input
          type="text"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          required
        />
      </div>
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default Budget;
