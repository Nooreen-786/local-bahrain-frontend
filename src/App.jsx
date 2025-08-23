import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';


import PlaceDetailPage from './pages/PlaceDetailPage';
import PlaceFormPage from './pages/PlaceFormPage';
import PlaceListPage from './pages/PlaceListPage';

import RestaurantDetailPage from './pages/RestaurantDetailPage';
import RestaurantFormPage from './pages/RestaurantFormPage';
import RestaurantListPage from './pages/RestaurantListPage';
import Account from './pages/Account';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Places */}
      <Route path="/places" element={<PlaceListPage />} />
      <Route path="/places/new" element={<PlaceFormPage />} />
      <Route path="/places/:id" element={<PlaceDetailPage />} />
      <Route path="/places/:id/edit" element={<PlaceFormPage />} />

      
      {/* Restaurants */}
      <Route path="/restaurants" element={<RestaurantListPage />} />
      <Route path="/restaurants/new" element={<RestaurantFormPage />} />
      <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}
