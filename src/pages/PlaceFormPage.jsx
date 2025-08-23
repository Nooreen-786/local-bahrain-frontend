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
import { createPlace, getPlaceById, updatePlace } from '../services/placeService';

export default function PlaceFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [placeData, setPlaceData] = useState({
    name: '',
    location: '',
    category: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      getPlaceById(id).then((res) => setPlaceData(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updatePlace(id, placeData);
    } else {
      await createPlace(placeData);
    }
    navigate('/places');
  };

  const handleChange = (e) => {
    setPlaceData({ ...placeData, [e.target.name]: e.target.value });
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
          {id ? 'Edit Place' : 'Add New Place'}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              variant="filled"
              fullWidth
              required
              value={placeData.name}
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
              value={placeData.location}
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
              value={placeData.category}
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
              value={placeData.description}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Image URL"
              name="image"
              variant="filled"
              fullWidth
              value={placeData.image}
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
              {id ? 'Update Place' : 'Create Place'}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
