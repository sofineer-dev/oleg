// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Support from './pages/Support';
import Business from './pages/Business';
import Exchange from './pages/Exchange'; // Assuming this is a different exchange page
import LoginForm from './components/LoginForm';
import CryptoExchange from './components/CryptoExchange'; // Import the CryptoExchange component
import React, { useState } from 'react';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState(''); // State to hold the user's name

    const handleLogin = (name) => {
        setIsAuthenticated(true);
        setUserName(name); // Set the user's name on login
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/business" element={<Business />} />
                <Route path="/exchange" element={isAuthenticated ? <Exchange userName={userName} /> : <Navigate to="/login" />} />
                <Route path="/crypto-exchange" element={<CryptoExchange />} /> {/* Add the new route for CryptoExchange */}
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            </Routes>
        </Router>
    );
};

export default App;
