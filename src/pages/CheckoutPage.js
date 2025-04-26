import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css'; 

function CheckoutPage() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const username = 'Ahmad'; 

  const cart = location.state?.cart || []; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: ''
  });

  const [showModal, setShowModal] = useState(false); 
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleBackClick = () => {
    navigate('/trips'); 
  };

  const handleLogout = () => {
    navigate('/'); // Log out and navigate to homepage
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.paymentMethod) {
      setConfirmationMessage(`Thank you, ${formData.name}! Your trip is confirmed. We'll send the details to ${formData.email}.`);
      setShowModal(true); // Show modal on confirmation
    } else {
      setConfirmationMessage('Please fill in all required fields.');
    }
  };

  // Calculate the total price
  const totalPrice = cart.reduce((acc, pkg) => acc + parseFloat(pkg.price.replace('$', '')), 0);

  const handleModalClose = () => {
    setShowModal(false); // Close modal when OK is clicked
    navigate('/user'); // Redirect to UserPage
  };

  return (
    <div className="checkout-page">
      {/* Navbar Section */}
      <div className="navbar">
        <button className="back-btn" onClick={handleBackClick}>Back</button>
        <div className="navbar-content">
          <span className="username">Welcome, {username}</span>
          <button className="nav-btn">Loyalty Points</button>
          <button className="nav-btn" onClick={() => alert('Travel History clicked')}>Travel History</button>
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <h1 className="page-title">Checkout</h1>

      {/* Cart Summary */}
      <div className="checkout-summary">
        <h2>Your Selected Trips</h2>
        {cart.length > 0 ? (
          cart.map((pkg, index) => (
            <div key={index} className="checkout-trip-card">
              <div className="trip-info">
                <h3>{pkg.country}</h3>
                <p>{pkg.description}</p>
                <p><strong>Price:</strong> {pkg.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-trip-msg">No trips selected. Please go back and select some trips.</p>
        )}
      </div>

      {/* Total Price Section */}
      {cart.length > 0 && (
        <div className="total-section">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}

      {/* Checkout Form */}
      <div className="checkout-form">
        <h2>Enter Your Details</h2>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          placeholder="Full Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          placeholder="Email Address" 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleInputChange} 
          placeholder="Phone Number" 
          required 
        />
        <textarea 
          name="specialRequests" 
          value={formData.specialRequests} 
          onChange={handleInputChange} 
          placeholder="Special Requests" 
          rows="4" 
        ></textarea>
        <select 
          name="paymentMethod" 
          value={formData.paymentMethod} 
          onChange={handleInputChange} 
          required
        >
          <option value="">Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button className="checkout-btn" onClick={handleFormSubmit}>
          Confirm
        </button>
      </div>

      {/* Confirmation Message */}
      {confirmationMessage && <p className="confirmation-msg">{confirmationMessage}</p>}

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

      {/* Modal for Confirmation */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Trip Confirmed!</h2>
            <p>{confirmationMessage}</p>
            <button className="modal-btn" onClick={handleModalClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
