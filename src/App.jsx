import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import RegisterPage from './pages/RegisterPage';
import PlaceListPage from './pages/PlaceListPage';
import RestaurantListPage from './pages/RestaurantListPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';


import PlaceFormPage from './pages/PlaceFormPage';
import RestaurantFormPage from './pages/RestaurantFormPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/places" element={<PlaceListPage />} />
          <Route path="/places/:id" element={<PlaceDetailPage />} />
          <Route path="/restaurants" element={<RestaurantListPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />


          <Route
            path="/places/new"
            element={
              <PrivateRoute>
                <PlaceFormPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/places/:id/edit"
            element={
              <PrivateRoute>
                <PlaceFormPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/restaurants/new"
            element={
              <PrivateRoute>
                <RestaurantFormPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/restaurants/:id/edit"
            element={
              <PrivateRoute>
                <RestaurantFormPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
