// components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            if (response.data) {
                const { name } = response.data; // Adjust this to match your API response
                onLogin(name); // Pass the user's name back to the App component
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
};

export default LoginForm;
