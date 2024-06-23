import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/auth/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password
  });
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password
  });
};

const authService = {
  register,
  login
};

export default authService;
