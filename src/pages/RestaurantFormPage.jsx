import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createRestaurant, getRestaurantById, updateRestaurant } from '../services/restaurantService';

export default function RestaurantFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [restaurantData, setRestaurantData] = useState({
    name: '',
    location: '',
    category: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      getRestaurantById(id).then((res) => setRestaurantData(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateRestaurant(id, restaurantData);
    } else {
      await createRestaurant(restaurantData);
    }
    navigate('/restaurants');
  };

  const handleChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #3b0764, #9333ea, #f43f5e)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 8,
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 6,
          width: { xs: '100%', sm: '500px' },
          borderRadius: 4,
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: 'white',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          {id ? 'Edit Restaurant' : 'Add New Restaurant'}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              variant="filled"
              fullWidth
              required
              value={restaurantData.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Location"
              name="location"
              variant="filled"
              fullWidth
              required
              value={restaurantData.location}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Category"
              name="category"
              variant="filled"
              fullWidth
              required
              value={restaurantData.category}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Description"
              name="description"
              variant="filled"
              fullWidth
              multiline
              minRows={3}
              value={restaurantData.description}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Image URL"
              name="image"
              variant="filled"
              fullWidth
              value={restaurantData.image}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ fontWeight: 'bold', mt: 2 }}
            >
              {id ? 'Update Restaurant' : 'Create Restaurant'}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
