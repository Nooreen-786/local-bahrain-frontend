import { Routes, Route } from 'react-router-dom';
import PlaceListPage from './pages/PlaceListPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import PlaceFormPage from './pages/PlaceFormPage';

<Routes>
  <Route path="/places" element={<PlaceListPage />} />
  <Route path="/places/new" element={<PlaceFormPage />} />
  <Route path="/places/:id/edit" element={<PlaceFormPage />} />
  <Route path="/places/:id" element={<PlaceDetailPage />} />
</Routes>

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Pages
import HomePage from './pages/HomePage';
import PlaceFormPage from './pages/PlaceFormPage';
import SignIn from './pages/SignIn';
// etc...

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />

          {/* PROTECTED ROUTES */}
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

          {/* Add more protected routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
