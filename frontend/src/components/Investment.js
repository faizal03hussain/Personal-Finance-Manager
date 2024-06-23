import React, { useState } from 'react';
import investmentService from '../services/investmentService';

const Investment = () => {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [purchase_date, setPurchaseDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await investmentService.addInvestment({ type, amount, purchase_date, description });
      alert('Investment added successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Purchase Date</label>
        <input
          type="date"
          value={purchase_date}
          onChange={(e) => setPurchaseDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Investment</button>
    </form>
  );
};

export default Investment;
