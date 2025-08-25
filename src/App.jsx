import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

import HomePage from './pages/HomePage';
import PlaceListPage from './pages/PlaceListPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import PlaceFormPage from './pages/PlaceFormPage';
import SignIn from './pages/SignIn';

import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantFormPage from './pages/RestaurantFormPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import Account from './pages/Account';  
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/places" element={<PlaceListPage />} />
        <Route path="/places/:id" element={<PlaceDetailPage />} />
        <Route path="/restaurants" element={<RestaurantListPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />

       
        <Route element={<PrivateRoute />}>
          <Route path="/places/new" element={<PlaceFormPage />} />
          <Route path="/places/:id/edit" element={<PlaceFormPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/restaurants/new" element={<RestaurantFormPage />} />
          <Route path="/restaurants/:id/edit" element={<RestaurantFormPage />} />
          <Route path="/account" element={<Account />} />  
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
