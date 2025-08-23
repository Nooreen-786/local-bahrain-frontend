import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
     
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
            Local Bahrain
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/login" variant="outlined" color="secondary">
              Sign In
            </Button>
            <Button component={Link} to="/register" variant="contained" color="secondary">
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

    
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(120deg, #3b0764, #9333ea, #f43f5e)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, textShadow: '2px 2px 5px #000' }}>
            Welcome to{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Local Bahrain
            </Box>
          </Typography>

          <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', mb: 6, textShadow: '1px 1px 3px #000' }}>
            Discover hidden gems, breathtaking places, and the best restaurants on the island.
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '30px',
              transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => navigate('/login')}
          >
            Explore Now
          </Button>
        </Container>
      </Box>

     
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#000', color: '#ccc' }}>
        &copy; 2025 Local Bahrain — Made with ❤️ from the island
      </Box>
    </>
  );
}
