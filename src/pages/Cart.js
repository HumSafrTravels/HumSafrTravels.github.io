import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TripsCart({ selectedPackages }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [cartItems, setCartItems] = useState(selectedPackages);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const removePackage = (country) => {
    setCartItems(cartItems.filter(item => item.country !== country));
  };

  const formatPrice = (price) => {
    return price.replace('$', '').replace(',', '');
  };

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(formatPrice(item.price)), 0);

  return (
    <div className={`cart-section ${isMinimized ? 'minimized' : ''}`}>
      <div className="cart-header">
        <h2>Tour Packages</h2>
        <button className="minimize-button" onClick={toggleMinimize}>
          {isMinimized ? 'Expand' : 'Minimize'}
        </button>
      </div>
      <div className="cart-body">
        {!isMinimized && cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((pkg, index) => (
              <div key={index} className="cart-item">
                <h3>{pkg.country}</h3>
                <p>{pkg.description}</p>
                <p><strong>Price: </strong>{pkg.price}</p>
                <button onClick={() => removePackage(pkg.country)}>Remove</button>
              </div>
            ))}
          </div>
        ) : null}
        <div className="total">
          <strong>Total: ${totalAmount.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}

TripsCart.propTypes = {
  selectedPackages: PropTypes.array.isRequired,
};

export default TripsCart;
