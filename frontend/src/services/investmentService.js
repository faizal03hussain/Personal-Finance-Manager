import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/investments/';

const addInvestment = (investment) => {
  return axios.post(API_URL + 'add', investment, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

const getInvestments = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

const investmentService = {
  addInvestment,
  getInvestments
};

export default investmentService;
