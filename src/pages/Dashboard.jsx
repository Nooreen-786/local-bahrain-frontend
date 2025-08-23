import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #3b0764, #9333ea, #f43f5e)',
        color: 'white',
        px: 2,
        py: 4,
        position: 'relative',
      }}
    >
    
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate('/account')}
          sx={{ borderColor: 'white', color: 'white' }}
        >
          Account
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleLogout}
          sx={{ borderColor: 'white', color: 'white' }}
        >
          Logout
        </Button>
      </Stack>

      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 'bold', mb: 6, textShadow: '2px 2px 5px #000' }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="center">
      
        <Grid sx={{ flexBasis: { xs: '90%', sm: '45%', md: '30%' } }}>
          <Card
            onClick={() => navigate('/places')}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 10,
              },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image="/images/places.png"
              alt="Places"
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ fontWeight: 'bold', color: 'primary.main' }}
              >
                Attractions 🗺️
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      
        <Grid sx={{ flexBasis: { xs: '90%', sm: '45%', md: '30%' } }}>
          <Card
            onClick={() => navigate('/restaurants')}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 10,
              },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image="/images/restaurant.png"
              alt="Restaurants"
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ fontWeight: 'bold', color: 'error.main' }}
              >
                Feast 🍽️
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
