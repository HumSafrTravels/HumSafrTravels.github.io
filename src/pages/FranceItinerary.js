import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Itinerary.css'; // Ensure this file includes necessary styling

function FranceItinerary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/trips'); // Redirect to the trips page
  };

  return (
    <div className="france-itinerary">
      {/* Navbar Section */}
      <div className="navbar">
        <button className="back-btn" onClick={handleBackClick}>Back</button>
        <div className="navbar-content">
          <span className="username">Welcome, Ahmad</span>
          <button className="nav-btn">Loyalty Points</button>
          <button className="nav-btn">Travel History</button>
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Hero Section with France Image and Animation */}
      <div 
        className="hero-section2" 
        style={{
          backgroundImage: "url('/images/france1.avif')", // Adjust this to the France background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          borderRadius: '8px'
        }}
      >
        <h1 className="hero-title">Explore France: The Romance of Europe</h1>
        <p className="hero-subtitle">Discover the art, history, and beauty of France’s finest cities and countryside.</p>
      </div>

      {/* Itinerary Details */}
      <div className="itinerary-details">
        <div className="day" data-aos="fade-up">
          <h2>Day 1: Arrival in Paris</h2>
          <p>Marvel at the Eiffel Tower, take a boat ride along the Seine, and explore the art at the Louvre.</p>
          <img src="/images/paris.avif" alt="Paris" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 2: Nice</h2>
          <p>Relax on the Mediterranean coast, visit the old town, and stroll along the famous Promenade des Anglais.</p>
          <img src="/images/nice.avif" alt="Nice" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 3: Lyon</h2>
          <p>Indulge in French cuisine in Lyon, often considered the food capital of France, and explore its UNESCO-listed old town.</p>
          <img src="/images/lyon.avif" alt="Lyon" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 4: French Riviera</h2>
          <p>Spend a day soaking up the sun on the French Riviera, visiting glamorous cities like Cannes and Monaco.</p>
          <img src="/images/frenchriver.avif" alt="French Riviera" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 5: Bordeaux</h2>
          <p>Experience wine-tasting in the heart of Bordeaux, and explore the historic architecture of the city.</p>
          <img src="/images/bordeaux.avif" alt="Bordeaux" />
        </div>
      </div>
    </div>
  );
}

export default FranceItinerary;
