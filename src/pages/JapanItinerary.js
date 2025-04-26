// src/pages/JapanItinerary.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Itinerary.css'; // Ensure this file includes necessary styling

function JapanItinerary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/trips'); // Redirect to the trips page
  };

  return (
    <div className="japan-itinerary">
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

      {/* Hero Section with Japan Image and Animation */}
      <div 
        className="hero-section2" 
        style={{
          backgroundImage: "url('/images/japan1.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          borderRadius: '8px'
        }}
      >
        <h1 className="hero-title">Explore Japan: The Land of the Rising Sun</h1>
        <p className="hero-subtitle">Embark on an unforgettable journey through Japan's modern cities and serene temples.</p>
      </div>

      {/* Itinerary Details */}
      <div className="itinerary-details">
        <div className="day" data-aos="fade-up">
          <h2>Day 1: Arrival in Tokyo</h2>
          <p>Explore the bustling streets of Shibuya, visit the Tokyo Tower, and immerse yourself in the city's unique culture.</p>
          <img src="/images/tokyo.avif" alt="Tokyo" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 2: Kyoto</h2>
          <p>Visit the historic temples of Kyoto, including Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.</p>
          <img src="/images/kyoto.avif" alt="Kyoto" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 3: Osaka</h2>
          <p>Enjoy the vibrant atmosphere of Osaka, with a visit to Osaka Castle and street food tasting in Dotonbori.</p>
          <img src="/images/osaka.avif" alt="Osaka" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 4: Hiroshima</h2>
          <p>Experience the Peace Memorial Park and Museum in Hiroshima, followed by a ferry ride to the serene Itsukushima Shrine on Miyajima Island.</p>
          <img src="/images/hiroshima.avif" alt="Hiroshima" />
        </div>
      </div>
    </div>
  );
}

export default JapanItinerary;
