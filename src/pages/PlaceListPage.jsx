import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Rating,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const PlaceListPage = () => {
  const navigate = useNavigate();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [editingComments, setEditingComments] = useState({});

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized: No token found. Please log in.');
        setLoading(false);
        return;
      }

      const response = await axios.get(`${API_URL}/places`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPlaces(response.data);
      const allComments = {};
      response.data.forEach(place => {
        allComments[place._id] = place.comments || [];
        ratings[place._id] = place.rating || 0;
      });
      setComments(allComments);
    } catch (err) {
      console.error('Error fetching places:', err);
      setError('Failed to load places.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlace = () => {
    navigate('/places/new');
  };

  const handleEditPlace = (id) => {
    navigate(`/places/${id}/edit`);
  };

  const handleDeletePlace = async (id) => {
    if (!window.confirm('Are you sure you want to delete this place?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/places/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPlaces((prev) => prev.filter((place) => place._id !== id));
    } catch (err) {
      console.error('Failed to delete place:', err);
      alert('Error deleting the place.');
    }
  };

  const handleRatingChange = async (placeId, newValue) => {
    setRatings((prev) => ({ ...prev, [placeId]: newValue }));

    try {
      const token = localStorage.getItem('token');
      await axios.patch(`${API_URL}/places/${placeId}/rating`, { rating: newValue }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.error('Failed to save rating:', err);
    }
  };

  const handleCommentInputChange = (placeId, value) => {
    setCommentInputs((prev) => ({ ...prev, [placeId]: value }));
  };

  const handleAddComment = async (placeId) => {
    const input = commentInputs[placeId];
    if (!input) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${API_URL}/places/${placeId}/comments`, { text: input }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setComments((prev) => ({
        ...prev,
        [placeId]: [...(prev[placeId] || []), response.data],
      }));

      setCommentInputs((prev) => ({ ...prev, [placeId]: '' }));
    } catch (err) {
      console.error('Failed to add comment:', err);
    }
  };

  const handleEditComment = async (placeId, commentId) => {
    const newText = editingComments[commentId];
    if (!newText) return;

    try {
      const token = localStorage.getItem('token');
      await axios.put(`${API_URL}/places/${placeId}/comments/${commentId}`, { text: newText }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setComments((prev) => ({
        ...prev,
        [placeId]: prev[placeId].map((c) =>
          c._id === commentId ? { ...c, text: newText } : c
        ),
      }));

      const newEdits = { ...editingComments };
      delete newEdits[commentId];
      setEditingComments(newEdits);
    } catch (err) {
      console.error('Failed to edit comment:', err);
    }
  };

  const handleDeleteComment = async (placeId, commentId) => {
    if (!window.confirm('Delete this comment?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/places/${placeId}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setComments((prev) => ({
        ...prev,
        [placeId]: prev[placeId].filter((c) => c._id !== commentId),
      }));
    } catch (err) {
      console.error('Failed to delete comment:', err);
    }
  };

  if (loading) return <Typography>Loading places...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(120deg, #3b0764, #9333ea, #f43f5e)', color: '#fff', py: 6, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">Attractions</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddPlace}
          sx={{ fontWeight: 'bold', backgroundColor: '#ff9800', '&:hover': { backgroundColor: '#fb8c00' } }}
        >
          + Add Place
        </Button>
      </Box>

      <Stack spacing={5} alignItems="center">
        {places.map((place) => (
          <Card key={place._id} sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 6, backgroundColor: '#fff', color: '#000', maxWidth: 800, width: '100%' }}>
            <CardMedia
              component="img"
              height="350"
              image={place.image || '/images/default-image.jpg'}
              alt={place.name}
              sx={{ objectFit: 'cover', width: '100%' }}
            />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>{place.name}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{place.description || 'No description available.'}</Typography>
              <Typography variant="subtitle2" sx={{ mb: 1 }}><strong>Location:</strong> {place.location}</Typography>

              <Box sx={{ mt: 2, mb: 2 }}>
                <Button startIcon={<EditIcon />} color="primary" variant="outlined" onClick={() => handleEditPlace(place._id)} sx={{ mr: 1 }}>Edit</Button>
                <Button startIcon={<DeleteIcon />} color="error" variant="outlined" onClick={() => handleDeletePlace(place._id)}>Delete</Button>
              </Box>

              <Rating
                name={`rating-${place._id}`}
                value={ratings[place._id] || place.rating || 0}
                onChange={(e, newValue) => handleRatingChange(place._id, newValue)}
              />

              {/* Comments */}
              <Box sx={{ mt: 3, textAlign: 'left' }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Comments</Typography>

                {(comments[place._id] || []).map((comment) => (
                  <Box
                    key={comment._id}
                    sx={{
                      backgroundColor: '#f0f0f0',
                      borderRadius: 1,
                      p: 1,
                      mb: 1,
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {editingComments[comment._id] !== undefined ? (
                      <>
                        <TextField
                          size="small"
                          value={editingComments[comment._id]}
                          onChange={(e) =>
                            setEditingComments((prev) => ({
                              ...prev,
                              [comment._id]: e.target.value,
                            }))
                          }
                          sx={{ flexGrow: 1, mr: 1 }}
                        />
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleEditComment(place._id, comment._id)}
                        >
                          Save
                        </Button>
                      </>
                    ) : (
                      <>
                        <Typography variant="body2" sx={{ flexGrow: 1 }}>
                          {comment.text}
                        </Typography>
                        <Box>
                          <Button
                            size="small"
                            onClick={() =>
                              setEditingComments((prev) => ({
                                ...prev,
                                [comment._id]: comment.text,
                              }))
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            size="small"
                            color="error"
                            onClick={() => handleDeleteComment(place._id, comment._id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      </>
                    )}
                  </Box>
                ))}

                <Box sx={{ display: 'flex', mt: 1 }}>
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Add a comment..."
                    fullWidth
                    value={commentInputs[place._id] || ''}
                    onChange={(e) =>
                      handleCommentInputChange(place._id, e.target.value)
                    }
                  />
                  <IconButton
                    color="primary"
                    onClick={() => handleAddComment(place._id)}
                    disabled={!commentInputs[place._id]}
                  >
                    <SendIcon />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default PlaceListPage;
