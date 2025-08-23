import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RegisterUser } from '../services/Auth';
import { Box, Button, Typography, TextField } from '@mui/material';

const Register = () => {
  const navigate = useNavigate();

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    ProfilePic: '',
  };

  const [formValues, setFormValues] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setError('');

    try {
      await RegisterUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        ProfilePic: formValues.ProfilePic,
      });

      setFormValues(initialState);
      navigate('/signin');
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
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
          maxWidth: 450,
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" mb={3} fontWeight="bold" color="#3b0764">
          Register
        </Typography>

        {error && (
          <Typography color="error" mb={2}>
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Name"
          id="name"
          type="text"
          placeholder="John Doe"
          value={formValues.name}
          onChange={handleChange}
          required
          margin="normal"
          autoComplete="name"
        />

        <TextField
          fullWidth
          label="Email"
          id="email"
          type="email"
          placeholder="example@example.com"
          value={formValues.email}
          onChange={handleChange}
          required
          margin="normal"
          autoComplete="email"
        />

        <TextField
          fullWidth
          label="Password"
          id="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Profile Picture URL (optional)"
          id="ProfilePic"
          type="text"
          value={formValues.ProfilePic}
          onChange={handleChange}
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
          disabled={
            !formValues.email ||
            !formValues.password ||
            formValues.password !== formValues.confirmPassword
          }
        >
          Register
        </Button>

        <Typography mt={3} variant="body1" color="#3b0764">
          Or
        </Typography>

        <Button
          component={Link}
          to="/signin"
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
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
