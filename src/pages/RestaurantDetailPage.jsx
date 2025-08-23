import React from "react";
import { useParams, Link } from "react-router-dom";
import { getRestaurantById, addReview, deleteReview } from '../services/restaurantService';


const restaurants = [
  { id: 1, name: "CUT by Wolfgang Puck", location: "Four Seasons Hotel", description: "Upscale steakhouse with exquisite cuts and elegant setting." },
  { id: 2, name: "Masso", location: "The Domain Hotel", description: "Modern Mediterranean cuisine with fresh local ingredients." },
  { id: 3, name: "La Mer", location: "The Palace Boutique Hotel", description: "Seafood-focused menu with a cozy, seaside atmosphere." },
  { id: 4, name: "Bushido", location: "Galleria Mall", description: "Japanese restaurant featuring sushi and teppanyaki." },
  { id: 5, name: "Haji Gahwa", location: "Muharraq", description: "Traditional Bahraini cuisine in a cultural setting." },
  { id: 6, name: "Mirai", location: "Seef District", description: "Contemporary Japanese fusion with vibrant flavors." },
  { id: 7, name: "Saffron by Jena", location: "Downtown Manama", description: "Innovative Bahraini and Middle Eastern dishes." },
  { id: 8, name: "Maki Bahrain", location: "Adliya", description: "Trendy spot for sushi and Japanese small plates." },
  { id: 9, name: "Bamboo", location: "Seef", description: "Asian fusion with a chic ambiance." },
  { id: 10, name: "Ric's Kountry Kitchen", location: "Muharraq", description: "Homestyle comfort food and hearty breakfasts." },
];

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return (
      <div>
        <h2>Restaurant not found</h2>
        <Link to="/restaurants">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p><strong>Location:</strong> {restaurant.location}</p>
      <p>{restaurant.description}</p>
      <Link to="/restaurants">Back to list</Link>
    </div>
  );
}
