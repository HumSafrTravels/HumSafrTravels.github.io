import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Itinerary.css'; // Ensure this file includes necessary styling

function SwitzerlandItinerary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/trips'); // Redirect to the trips page
  };

  return (
    <div className="switzerland-itinerary">
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

      {/* Hero Section with Switzerland Image and Animation */}
      <div 
        className="hero-section2" 
        style={{
          backgroundImage: "url('/images/swiss.avif')", // Adjust this to the Switzerland background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          borderRadius: '8px'
        }}
      >
        <h1 className="hero-title">Explore Switzerland: A Journey Through Alps and Lakes</h1>
        <p className="hero-subtitle">Experience Switzerland's majestic landscapes, charming villages, and luxurious resorts.</p>
      </div>

      {/* Itinerary Details */}
      <div className="itinerary-details">
        <div className="day" data-aos="fade-up">
          <h2>Day 1: Arrival in Zurich</h2>
          <p>Discover the cosmopolitan city of Zurich, stroll through the old town, and enjoy a boat ride on Lake Zurich.</p>
          <img src="/images/zurich.avif" alt="Zurich" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 2: Lucerne</h2>
          <p>Visit the stunning Chapel Bridge, take a cable car to Mount Pilatus, and explore the picturesque town of Lucerne.</p>
          <img src="/images/lucerne.avif" alt="Lucerne" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 3: Interlaken</h2>
          <p>Embark on a breathtaking journey to Jungfraujoch, the "Top of Europe," and enjoy panoramic views of the Swiss Alps.</p>
          <img src="/images/interlaken.avif" alt="Interlaken" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 4: Zermatt</h2>
          <p>Travel to Zermatt and enjoy hiking with a stunning view of the Matterhorn, one of the world's iconic peaks.</p>
          <img src="/images/zermatt.avif" alt="Zermatt" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 5: Geneva</h2>
          <p>Explore Geneva's International District, visit the Jet d'Eau fountain, and unwind by the beautiful shores of Lake Geneva.</p>
          <img src="/images/geneva.avif" alt="Geneva" />
        </div>
      </div>
    </div>
  );
}

export default SwitzerlandItinerary;
