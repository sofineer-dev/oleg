import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/register', { name, email, password, password_confirmation: passwordConfirmation });
            setMessage('Registration successful! Please log in.');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            {message && <div className="alert alert-success mt-2">{message}</div>}
        </form>
    );
};

export default SignupForm;
