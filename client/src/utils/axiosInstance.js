import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Set your base URL here
  // Other default configurations can be added here
});

export default instance;