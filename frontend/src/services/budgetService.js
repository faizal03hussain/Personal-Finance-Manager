import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/budgets/';

const setBudget = (budget) => {
  return axios.post(API_URL + 'set', budget, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

const getBudgets = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

const budgetService = {
  setBudget,
  getBudgets
};

export default budgetService;
