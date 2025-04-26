import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MapsPage.css';

function MapsPage() {
    const username = 'Ahmad';
    const [showHistory, setShowHistory] = useState(false);
    const navigate = useNavigate();
  
    const handleBackClick = () => {
        navigate('/user');
    };
    
    const handleLogout = () => {
        navigate('/');
    };

    const toggleHistorySidebar = () => {
        setShowHistory((prev) => !prev);
    };

    return (
        <div className="maps-page">
            <div className="navbar">
                <button className="back-btn" onClick={handleBackClick}>Back</button>
                <div className="navbar-content">
                    <span className="username">Welcome, {username}</span>
                    <button className="nav-btn">Loyalty Points</button>
                    <button className="nav-btn" onClick={toggleHistorySidebar}>Travel History</button>
                    <button className="nav-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <h1>Explore Destinations</h1>
            <div className="map-container">
                {/* Embed a Google Map iframe as an example */}
                <iframe
                    title="Interactive Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090923!2d144.96305781565894!3d-37.81362777975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2zTWVsYm91cm5lLCBBdXN0cmFsaWE!5e0!3m2!1sen!2s!4v1671004024096!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Travel History Sidebar */}
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

export default MapsPage;
