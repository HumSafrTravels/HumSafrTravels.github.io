// src/pages/ItalyItinerary.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Itinerary.css'; // Ensure this file includes necessary styling

function ItalyItinerary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/trips'); // Redirect to the trips page
  };

  return (
    <div className="italy-itinerary">
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

      {/* Hero Section with Italy Image and Animation */}
      <div 
        className="hero-section2" 
        style={{
          backgroundImage: "url('/images/italy1.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          borderRadius: '8px'
        }}
      >
        <h1 className="hero-title">Explore Italy: A Journey Through Time</h1>
        <p className="hero-subtitle">Experience the rich culture, art, and cuisine of Italy with our exclusive itinerary.</p>
      </div>

      {/* Itinerary Details */}
      <div className="itinerary-details">
        <div className="day" data-aos="fade-up">
          <h2>Day 1: Arrival in Rome</h2>
          <p>Discover the historical wonders of Rome, including the Colosseum, Roman Forum, and Vatican City.</p>
          <img src="/images/rome.avif" alt="Rome" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 2: Florence</h2>
          <p>Explore the heart of the Renaissance in Florence. Visit the Uffizi Gallery, Duomo, and Ponte Vecchio.</p>
          <img src="/images/florence.avif" alt="Florence" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 3: Venice</h2>
          <p>Experience the romantic canals of Venice. Take a gondola ride, visit St. Mark's Basilica, and enjoy the Venetian charm.</p>
          <img src="/images/venice.avif" alt="Venice" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 4: Milan</h2>
          <p>Wrap up your journey in Milan, Italy’s fashion and business hub. Visit the iconic Milan Cathedral and explore local boutiques.</p>
          <img src="/images/milan.avif" alt="Milan" />
        </div>
      </div>
    </div>
  );
}

export default ItalyItinerary;
