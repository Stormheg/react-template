import axios from 'axios';

export default () => {
  const baseUrl = '/api';
  axios.defaults.baseURL = baseUrl;
};
