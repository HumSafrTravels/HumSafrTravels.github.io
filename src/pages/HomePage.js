import React, { useState } from 'react';
import '../styles/HomePage.css';

function HomePage() {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const openSignIn = () => setSignInOpen(true);
  const closeSignIn = () => setSignInOpen(false);

  const openSignUp = () => setSignUpOpen(true);
  const closeSignUp = () => setSignUpOpen(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
  
    if (username === 'Ahmad' && password === '123') {
      window.location.href = '/user'; // Redirect to UserPage
    } else {
      alert('Invalid credentials');
    }
  };
  

  return (
    <div className="homepage">
      
      <section className="hero-section">
        <h1 className="hero-title">Welcome to ہمسفر</h1>
        <p className="hero-subtitle">Your traveling companion, where every journey is personalized</p>
        <input type="text" className="search-bar1" placeholder="Search for your next adventure..." />

        <div className="buttons">
          <button className="btn sign-in-btn" onClick={openSignIn}>Sign In</button>
          <button className="btn sign-up-btn" onClick={openSignUp}>Sign Up</button>
        </div>
      </section>
   
      {/* Modal for Sign In */}
      {isSignInOpen && (
        <div className="model-overlay">
          <div className="model">
            <h3>Sign In</h3>
            <form onSubmit={handleSignIn}>
              <input name="username" type="text" placeholder="Username" required />
              <input name="password" type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
              </form>
            <button className="close-btn" onClick={closeSignIn}>X</button>
          </div>
        </div>
      )}

      {/* Modal for Sign Up */}
      {isSignUpOpen && (
        <div className="model-overlay">
          <div className="model">
            <h3>Sign Up</h3>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <button className="close-btn" onClick={closeSignUp}>X</button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Custom Itinerary Planner</h3>
            <p>Create your perfect trip with tailored recommendations.</p>
          </div>
          <div className="feature-card">
            <h3>AI-based Recommendations</h3>
            <p>Get suggestions based on your travel preferences.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Maps</h3>
            <p>Explore destinations with real-time maps and routes.</p>
          </div>
        </div>
      </section>

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

export default HomePage;
