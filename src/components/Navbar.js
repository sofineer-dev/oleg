import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="row w-100">
                        {/* Logo Section */}
                        <div className="col-2">
                            <Link className="navbar-brand" to="/">My App</Link>
                        </div>

                        {/* Navigation Links Section */}
                        <div className="col-8">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/support">Support</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/crypto-exchange">Crypto Exchange</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Login/Register Section */}
                        <div className="col-2 text-end">
                            <button className="btn btn-outline-primary me-2" onClick={() => setShowLogin(true)}>Login</button>
                            <button className="btn btn-outline-secondary" onClick={() => setShowSignup(true)}>Signup</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Login Modal */}
            <div className={`modal ${showLogin ? 'show' : ''}`} style={{ display: showLogin ? 'block' : 'none' }} onClick={() => setShowLogin(false)}>
                <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                            <button type="button" className="close" onClick={() => setShowLogin(false)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <LoginForm onLogin={() => setShowLogin(false)} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            <div className={`modal ${showSignup ? 'show' : ''}`} style={{ display: showSignup ? 'block' : 'none' }} onClick={() => setShowSignup(false)}>
                <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Signup</h5>
                            <button type="button" className="close" onClick={() => setShowSignup(false)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
