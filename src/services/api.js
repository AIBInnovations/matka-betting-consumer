import axios from 'axios';

const API = axios.create({
  baseURL: 'hhttps://only-backend-je4j.onrender.com/api', // Backend URL
  withCredentials: true, // Allow cookies in requests
});

export default API;
