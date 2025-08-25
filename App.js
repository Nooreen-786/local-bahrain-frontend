import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

import HomePage from './pages/HomePage';
import PlaceFormPage from './pages/PlaceFormPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import PlaceListPage from './pages/PlaceListPage';
import SignIn from './pages/SignIn';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />

       
        <Route path="/places" element={<PlaceListPage />} />
        <Route path="/places/:id" element={<PlaceDetailPage />} />

       
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
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
