import React, { useEffect, useState } from 'react';
import transactionService from '../services/transactionService';
import budgetService from '../services/budgetService';
import investmentService from '../services/investmentService';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionRes = await transactionService.getTransactions();
        const budgetRes = await budgetService.getBudgets();
        setTransactions(transactionRes.data);
        setBudgets(budgetRes.data);
        setInvestments(investmentRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount} on {transaction.transaction_date}
          </li>
        ))}
      </ul>
      <h2>Budgets</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            {budget.category_id}: ${budget.limit} ({budget.period})
          </li>
        ))}
      </ul>
      <h2>Investments</h2>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id}>
            {investment.type}: ${investment.amount} on {investment.purchase_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
