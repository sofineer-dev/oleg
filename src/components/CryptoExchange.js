import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CryptoExchange = () => {
    const [cryptos, setCryptos] = useState([]);
    const [amountFrom, setAmountFrom] = useState('');
    const [cryptoFrom, setCryptoFrom] = useState('');
    const [cryptoTo, setCryptoTo] = useState('');
    const [amountTo, setAmountTo] = useState('');

    useEffect(() => {
        const fetchCryptocurrencies = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
                setCryptos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch cryptocurrency data. Please check the console for more details.');
            }
        };

        fetchCryptocurrencies();
    }, []);

    const calculateExchange = () => {
        const selectedCryptoFrom = cryptos.find(crypto => crypto.id === cryptoFrom);
        const selectedCryptoTo = cryptos.find(crypto => crypto.id === cryptoTo);

        if (amountFrom && selectedCryptoFrom && selectedCryptoTo) {
            const amountInUSD = amountFrom * selectedCryptoFrom.current_price;
            const convertedAmount = amountInUSD / selectedCryptoTo.current_price;
            setAmountTo(convertedAmount.toFixed(2));
        } else {
            setAmountTo(''); // Clear the amountTo field if inputs are invalid
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="amountFrom">You Send</label>
                        <input
                            type="number"
                            id="amountFrom"
                            className="form-control"
                            placeholder="Enter amount"
                            min="0"
                            value={amountFrom}
                            onChange={(e) => setAmountFrom(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6 text-right">
                    <div className="form-group">
                        <select
                            id="cryptoFrom"
                            className="form-control"
                            value={cryptoFrom}
                            onChange={(e) => {
                                setCryptoFrom(e.target.value);
                                calculateExchange();
                            }}
                        >
                            <option value="">Select Cryptocurrency</option>
                            {cryptos.map(crypto => (
                                <option key={crypto.id} value={crypto.id}>
                                    <img src={crypto.image} alt={`${crypto.name} icon`} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                                    {crypto.name} ({crypto.symbol.toUpperCase()})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <label htmlFor="amountFrom">You Get</label>
                    <div className="form-group">
                        <input
                            type="text"
                            id="amountTo"
                            className="form-control"
                            placeholder="Converted amount"
                            readOnly
                            value={amountTo}
                        />
                    </div>
                </div>
                <div className="col-md-6 text-right">
                    <div className="form-group">
                        <select
                            id="cryptoTo"
                            className="form-control"
                            value={cryptoTo}
                            onChange={(e) => {
                                setCryptoTo(e.target.value);
                                calculateExchange();
                            }}
                        >
                            <option value="">Select Cryptocurrency</option>
                            {cryptos.map(crypto => (
                                <option key={crypto.id} value={crypto.id}>
                                    <img src={crypto.image} alt={`${crypto.name} icon`} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                                    {crypto.name} ({crypto.symbol.toUpperCase()})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoExchange;
