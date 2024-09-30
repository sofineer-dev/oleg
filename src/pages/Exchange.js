// pages/Exchange.js
import React from 'react';

const Exchange = ({ userName }) => {
    return (
        <div>
            <h1>Exchange Page</h1>
            <p>Welcome, {userName}!</p> {/* Display the user's name */}
        </div>
    );
};

export default Exchange;
