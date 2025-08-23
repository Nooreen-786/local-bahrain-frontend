import { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #3b0764, #9333ea, #f43f5e)',
        color: 'white',
        px: 2,
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 4,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Account Details
        </Typography>

        {user ? (
          <>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Name: {user.name || 'N/A'}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Email: {user.email}
            </Typography>
            {user.ProfilePic && (
              <Box
                component="img"
                src={user.ProfilePic}
                alt="Profile"
                sx={{
                  mt: 3,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid white',
                  mx: 'auto',
                  display: 'block',
                }}
              />
            )}
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}

        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 4 }}
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>
      </Paper>
    </Box>
  );
}
