// src/pages/GreeceItinerary.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Itinerary.css'; // Ensure this file includes necessary styling

function GreeceItinerary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/trips'); // Redirect to the trips page
  };

  return (
    <div className="greece-itinerary">
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

      {/* Hero Section with Greece Image and Animation */}
      <div 
        className="hero-section2" 
        style={{
          backgroundImage: "url('/images/greece1.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          borderRadius: '8px'
        }}
      >
        <h1 className="hero-title">Explore Greece: A Dream Vacation</h1>
        <p className="hero-subtitle">Uncover the beauty, culture, and history of Greece with our detailed itinerary.</p>
      </div>

      {/* Itinerary Details */}
      <div className="itinerary-details">
        <div className="day" data-aos="fade-up">
          <h2>Day 1: Arrival in Athens</h2>
          <p>Explore the historic city of Athens, including the Acropolis and Parthenon. Discover the ancient ruins and vibrant street life.</p>
          <img src="/images/athens.avif" alt="Athens" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 2: Santorini</h2>
          <p>Relax on the beautiful beaches of Santorini, enjoy the iconic sunset views from Oia, and wander through charming white-washed streets.</p>
          <img src="/images/santorini.avif" alt="Santorini" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 3: Mykonos</h2>
          <p>Enjoy the lively nightlife and luxurious beaches of Mykonos. Indulge in delicious local cuisine and shop for unique souvenirs.</p>
          <img src="/images/mykonos.avif" alt="Mykonos" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 4: Return to Athens</h2>
          <p>Wrap up your trip with a final day in Athens, soaking in the city's rich culture before heading home.</p>
          <img src="/images/halki.avif" alt="Return to Athens" />
        </div>
      </div>
    </div>
  );
}

export default GreeceItinerary;
