import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Itinerary.css'; // Ensure this file includes necessary styling

function AustraliaItinerary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/trips'); // Redirect to the trips page
  };

  return (
    <div className="australia-itinerary">
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

      {/* Hero Section with Australia Image and Animation */}
      <div 
        className="hero-section2" 
        style={{
          backgroundImage: "url('/images/aus.avif')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          borderRadius: '8px'
        }}
      >
        <h1 className="hero-title">Explore Australia: The Land of Wonders</h1>
        <p className="hero-subtitle">Venture into Australia’s vibrant cities, stunning beaches, and outback adventures.</p>
      </div>

      {/* Itinerary Details */}
      <div className="itinerary-details">
        <div className="day" data-aos="fade-up">
          <h2>Day 1: Arrival in Sydney</h2>
          <p>Visit the iconic Sydney Opera House, climb the Sydney Harbour Bridge, and explore Darling Harbour.</p>
          <img src="/images/sydney.avif" alt="Sydney" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 2: Great Barrier Reef</h2>
          <p>Snorkel or dive in, one of the seven wonders of the natural world, and experience marine life like never before.</p>
          <img src="/images/reef.avif" alt="Great Barrier Reef" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 3: Melbourne</h2>
          <p>Discover Melbourne’s artistic laneways, vibrant culture, and dine in one of the world’s most cosmopolitan cities.</p>
          <img src="/images/melbourne.avif" alt="Melbourne" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 4: Uluru (Ayers Rock)</h2>
          <p>Visit the sacred Uluru rock formations, explore the outback and take in breathtaking sunsets over the landscape.</p>
          <img src="/images/rock.avif" alt="Uluru" />
        </div>

        <div className="day" data-aos="fade-up">
          <h2>Day 5: Brisbane</h2>
          <p>Explore Brisbane's botanical gardens, visit the South Bank, and enjoy the city’s laid-back atmosphere.</p>
          <img src="/images/brisbane.avif" alt="Brisbane" />
        </div>
      </div>
    </div>
  );
}

export default AustraliaItinerary;
