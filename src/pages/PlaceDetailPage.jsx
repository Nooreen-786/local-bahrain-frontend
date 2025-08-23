import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRestaurantById, addReview, deleteReview } from '../services/restaurantService';

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [review, setReview] = useState({ comment: '', rating: '' });

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  const fetchRestaurant = async () => {
    const res = await getRestaurantById(id);
    setRestaurant(res.data);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    await addReview(id, review);
    await fetchRestaurant();
    setReview({ comment: '', rating: '' });
  };

  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;
    await deleteReview(id, reviewId);
    await fetchRestaurant();
  };

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <p><strong>Location:</strong> {restaurant.location}</p>
      <p><strong>Rating:</strong> {restaurant.rating.toFixed(1)}</p>

      <Link to={`/restaurants/${restaurant._id}/edit`} className="btn btn-warning mb-3">Edit</Link>

      <hr />
      <h4>Reviews</h4>
      {restaurant.reviews?.map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p><strong>{r.rating}⭐</strong> – {r.comment}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteReview(r._id)}
          >
            Delete
          </button>
        </div>
      ))}

      <hr />
      <h4>Add a Review</h4>
      <form onSubmit={handleReviewSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Comment"
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          required
        />
        <input
          className="form-control mb-2"
          type="number"
          placeholder="Rating (1-5)"
          value={review.rating}
          onChange={(e) => setReview({ ...review, rating: e.target.value })}
          min={1}
          max={5}
          required
        />
        <button className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}
