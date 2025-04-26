// src/pages/TripsPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TripsPage.css'; // Import TripsPage-specific styles

function TripsPage() {
  const navigate = useNavigate();
  const username = 'Ahmad'; // Hardcoded for demonstration
  const [showHistory, setShowHistory] = useState(false);

  const packages = [
    { country: 'Greece', description: 'Tour Athens, Santorini, and Mykonos', price: '$2800', image: 'url(/images/greece.avif)' },
    { country: 'Japan', description: 'Experience Tokyo, Kyoto, and Osaka', price: '$3000', image: 'url(/images/japan.avif)' },
    { country: 'France', description: 'Discover Paris, Nice, and the French Riviera', price: '$2500', image: 'url(/images/france.avif)' },
    { country: 'Australia', description: 'Visit Sydney, Melbourne, and the Great Barrier Reef', price: '$3500', image: 'url(/images/australia.avif)' },
    { country: 'Switzerland', description: 'Explore the beauty of Switzerland', price: '$2000', image: 'url(/images/switzerland.avif)' },
    { country: 'Italy', description: 'Explore Rome, Venice, and Florence', price: '$2000', image: 'url(/images/italy.avif)' },
    { country: 'Brazil', description: 'Explore Rio and the Amazon', price: '$2200', image: 'url(/images/brazil.avif)' },
    { country: 'South Africa', description: 'Discover Cape Town, Johannesburg, and Safari', price: '$2700', image: 'url(/images/southafrica.avif)' },
  ];

  const [cart, setCart] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleBackClick = () => {
    navigate('/user');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const addToCart = (pkg, e) => {
    e.stopPropagation(); // Prevent navigation when adding to cart
    setCart([...cart, pkg]);
  };

  
  const toggleHistorySidebar = () => {
    setShowHistory((prev) => !prev);
  };


  const toggleCart = () => {
    setIsMinimized(!isMinimized);
  };

  const handlePackageClick = (pkg) => {
    if (pkg.country === 'Greece') {
      navigate('/greece-itinerary'); // Navigate to the Greece itinerary page
    }
    if (pkg.country === 'Italy') {
      navigate('/italy-itinerary'); // Navigate to the Italy itinerary page
    }
    if (pkg.country === 'Japan') {
      navigate('/japan-itinerary'); // Navigate to the Japan itinerary page
    }
    if (pkg.country === 'France') {
      navigate('/france-itinerary'); // Navigate to the Japan itinerary page
    }
    if (pkg.country === 'Australia') {
      navigate('/australia-itinerary'); // Navigate to the Japan itinerary page
    }
    if (pkg.country === 'Switzerland') {
      navigate('/switzerland-itinerary'); // Navigate to the Japan itinerary page
    }
  };

  return (
    <div className="trips-page">
      <div className="navbar">
        <button className="back-btn" onClick={handleBackClick}>Back</button>
        <div className="navbar-content">
          <span className="username">Welcome, {username}</span>
          <button className="nav-btn">Loyalty Points</button>
          <button className="nav-btn" onClick={toggleHistorySidebar}>Travel History</button>
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <h1 className="page-title">Explore Our Tour Packages</h1>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div
            className="package-card"
            key={index}
            style={{ backgroundImage: pkg.image }}
            onClick={() => handlePackageClick(pkg)} // Handle click for routing to itinerary
          >
            <div className="overlay">
              <h3>{pkg.country}</h3>
              <p>{pkg.description}</p>
              <p><strong>Price:</strong> {pkg.price}</p>
              <button onClick={(e) => addToCart(pkg, e)}>Add to Cart</button> {/* Stop propagation for Add to Cart */}
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div id="Cart" className={isMinimized ? 'minimized' : ''}>
          <div id="Selected">
            <div className="title-container">
              <h1>Your Cart</h1>
              <button onClick={toggleCart} className="toggle-button">
                {isMinimized ? '↓' : '↑'}
              </button>
            </div>
            <h3>{cart.length} items selected</h3>
          </div>
          {!isMinimized && (
            <div className="cart-items">
              {cart.map((pkg, index) => (
                <div key={index} className="cart-item">
                  <h4>{pkg.country}</h4>
                  <p>{pkg.description}</p>
                  <p>{pkg.price}</p>
                  <button onClick={() => setCart(cart.filter((item) => item !== pkg))}>Remove</button>
                </div>
              ))}
            </div>
          )}
          <div className="total">
            <strong>Total:</strong> ${cart.reduce((acc, pkg) => acc + parseFloat(pkg.price.replace('$', '')), 0)}
          </div>

            <div className="cart-total-section">
            <button
              className="checkout-button"
              onClick={() => navigate('/checkout', { state: { cart } })}
            >
              Checkout
            </button>
             </div>



        </div>
      )}

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


      {/* Footer Section */}
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
    </div>

    
  );
}

export default TripsPage;
