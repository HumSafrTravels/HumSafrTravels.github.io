import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import TripsPage from './pages/TripsPage';
import CheckoutPage from './pages/CheckoutPage'; 
import GreeceItinerary from './pages/GreeceItinerary';
import ItalyItinerary from './pages/ItalyItinerary';
import JapanItinerary from './pages/JapanItinerary';
import FranceItinerary from './pages/FranceItinerary';
import AustraliaItinerary from './pages/AustraliaItinerary';
import SwitzerlandItinerary from './pages/SwitzerlandItinerary';
import MapsPage from './pages/MapsPage';

import './App.css';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/greece-itinerary" element={<GreeceItinerary />} />
        <Route path="/italy-itinerary" element={<ItalyItinerary />} />
        <Route path="/japan-itinerary" element={<JapanItinerary />} />
        <Route path="/france-itinerary" element={<FranceItinerary />} />
        <Route path="/australia-itinerary" element={<AustraliaItinerary />} />
        <Route path="/switzerland-itinerary" element={<SwitzerlandItinerary />} />
      </Routes>
    </Router>
  );
}

export default App;
