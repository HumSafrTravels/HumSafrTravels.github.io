import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserPage.css'; // Import UserPage-specific styles

function UserPage() {
  const username = 'Ahmad'; // Hardcoded for demonstration
  const [currentImage, setCurrentImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showHistory, setShowHistory] = useState(false); // State for sidebar
  const navigate = useNavigate();

  const images = [
    '/images/boat.avif',
    '/images/greece.avif',
    '/images/lake.avif',
    '/images/mountain.avif',
    '/images/tomb.avif',
    '/images/castle.avif',
    '/images/edinburgh.avif',
    '/images/snow.avif',
    '/images/black.avif',
    '/images/sunset.avif',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogout = () => {
    navigate('/'); // Redirect to home page for sign-in/sign-up
  };

  const handleNavigateToTrips = () => {
    navigate('/trips'); // Redirect to the Trips page
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNavigateToMaps = () => {
    navigate('/maps'); // Redirect to the MapsPage
  };

  const handleSearchSubmit = () => {
    const country = searchQuery.trim().toLowerCase();
    const countryRoutes = {
      france: '/france-itinerary',
      japan: '/japan-itinerary',
      australia: '/australia-itinerary',
      switzerland: '/switzerland-itinerary',
      italy: '/italy-itinerary',
      greece: '/greece-itinerary',
      // Add more countries and their corresponding routes here
    };

    if (countryRoutes[country]) {
      navigate(countryRoutes[country]);
    } else {
      alert('Country not found. Please try another search.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(); // Trigger search on pressing Enter
    }
  };

  const toggleHistorySidebar = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className="user-page" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <section className="hero1-section">
        <h1 className="hero1-title">Welcome, {username}</h1>
        <p className="hero1-subtitle">Your personalized traveling experience continues</p>

        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for your next adventure..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="buttons1">
          <button className="btn loyalty-btn1">Loyalty Points</button>
          <button className="btn history-btn1" onClick={toggleHistorySidebar}>Travel History</button>
        </div>

        <div className="additional-buttons1">
          <button className="btn" onClick={handleNavigateToTrips}>Tour Packages</button>
          <button className="btn">AI-based Recommendations</button>
          <button className="btn" onClick={handleNavigateToMaps}>Interactive Maps</button>
        </div>
      </section>

      {showHistory && (
  <div className="sidebar">
    <div className="sidebar-header">
      <h2 className="sidebar-title">Travel History</h2>
      <button className="close-btn1" onClick={toggleHistorySidebar} aria-label="Close Travel History">×</button>
    </div>
    <ul className="history-list">
      <li>Trip to Paris, France – March 2023</li>
      <li>Hiking in Swiss Alps – July 2023</li>
      <li>Tokyo Adventure, Japan – November 2023</li>
      <li>Greek Island Tour – February 2024</li>
      <li>Australian Outback Journey – June 2024</li>
    </ul>
  </div>
)}


      <div className="footer">
        <div className="footer-contact">
          <p>Contact us: support@humsafar.com.pk</p>
          <p>F6 Markaz, Islamabad</p>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="icon fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="icon fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="icon fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
