import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


export const RegisterUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData, { withCredentials: true });
};


export const LoginUser = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials, { withCredentials: true });
};


export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload);
  } catch (err) {
    console.error('Failed to decode token', err);
    return null;
  }
};
