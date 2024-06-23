import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/transactions/';

const addTransaction = (transaction) => {
  return axios.post(API_URL + 'add', transaction, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

const getTransactions = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

const transactionService = {
  addTransaction,
  getTransactions
};

export default transactionService;
