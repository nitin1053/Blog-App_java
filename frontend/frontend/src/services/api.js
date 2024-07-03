// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

const getToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchPosts = () => api.get('/post/lists/');
export const fetchPostDetail = (slug) => api.get(`/post/detail/${slug}/`);
export const loginUser = (credentials) => api.post('/user/token/', credentials);
export const registerUser = (data) => api.post('/user/register/', data);
export const fetchUserProfile = (userId) => api.get(`/user/profile/${userId}/`);
// Add other API services as needed
