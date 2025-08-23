import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const token = localStorage.getItem('token');

const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getRestaurants = () => axios.get(`${API_URL}/restaurants`);

export const getRestaurantById = (id) => axios.get(`${API_URL}/restaurants/${id}`);

export const createRestaurant = (restaurantData) =>
  axios.post(`${API_URL}/restaurants`, restaurantData, headers);

export const updateRestaurant = (id, restaurantData) =>
  axios.put(`${API_URL}/restaurants/${id}`, restaurantData, headers);

export const deleteRestaurant = (id) =>
  axios.delete(`${API_URL}/restaurants/${id}`, headers);

export const addReview = (id, reviewData) =>
  axios.post(`${API_URL}/restaurants/${id}/reviews`, reviewData, headers);


export const deleteReview = (restaurantId, reviewId) =>
  axios.delete(`${API_URL}/restaurants/${restaurantId}/reviews/${reviewId}`, headers);
