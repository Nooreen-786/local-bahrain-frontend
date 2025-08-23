import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginUser } from '../services/Auth';
import { Box, Button, Typography, TextField } from '@mui/material';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await LoginUser(formData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid email or password.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #3b0764, #9333ea, #f43f5e)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          p: 4,
          width: '100%',
          maxWidth: 400,
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" mb={3} fontWeight="bold" color="#3b0764">
          Sign In
        </Typography>

        {error && (
          <Typography color="error" mb={2}>
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: '#9333ea',
            '&:hover': {
              backgroundColor: '#6b1dbb',
            },
            fontWeight: 'bold',
          }}
        >
          Sign In
        </Button>

        <Typography mt={3} variant="body1" color="#3b0764">
          Or
        </Typography>

        <Button
          component={Link}
          to="/register"
          variant="outlined"
          fullWidth
          sx={{
            mt: 1,
            borderColor: '#9333ea',
            color: '#9333ea',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#9333ea',
              color: '#fff',
              borderColor: '#9333ea',
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
