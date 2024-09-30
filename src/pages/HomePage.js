import React, { useState } from 'react';
import CryptoExchange from '../components/CryptoExchange';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage = ({ onLogin }) => {
    const [activeTab, setActiveTab] = useState('exchange');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-4">
                   <h3>Limitless Web3.0 Crypto Exchange
                        Buy, Sell, <br></br>and Swap Crypto:
                        Simple, Fast, Free of Custody

                        Get recommended Wallet
                        Now WalletNow Wallet</h3>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                        <div className="tabs mb-3">
                                <button 
                                    className={`tab-button btn btn-outline-primary ${activeTab === 'exchange' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('exchange')}
                                >
                                    Crypto Exchange
                                </button>
                                <button 
                                    className={`tab-button btn btn-outline-primary ${activeTab === 'buySell' ? 'active' : ''}`} 
                                    onClick={() => handleTabChange('buySell')}
                                >
                                    Crypto Buy/Sell
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            

                            <div className="tab-content">
                                {activeTab === 'exchange' && (
                                    <div>
                                        <h2>Crypto Exchange</h2>
                                        <CryptoExchange />
                                    </div>
                                )}
                                {activeTab === 'buySell' && (
                                    <div>
                                        <h2>Crypto Buy/Sell</h2>
                                        <p>This is where you can buy or sell cryptocurrencies.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
