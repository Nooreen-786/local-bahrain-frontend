import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getPlaces = () => axios.get(`${API_URL}/places`);

export const getPlaceById = (id) => axios.get(`${API_URL}/places/${id}`);

export const createPlace = (placeData) =>
  axios.post(`${API_URL}/places`, placeData, getAuthHeaders());

export const updatePlace = (id, placeData) =>
  axios.put(`${API_URL}/places/${id}`, placeData, getAuthHeaders());

export const deletePlace = (id) =>
  axios.delete(`${API_URL}/places/${id}`, getAuthHeaders());

export const addReview = (id, reviewData) =>
  axios.post(`${API_URL}/places/${id}/reviews`, reviewData, getAuthHeaders());

export const deleteReview = (placeId, reviewId) =>
  axios.delete(`${API_URL}/places/${placeId}/reviews/${reviewId}`, headers);

