import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddFunds = () => {
  const navigate = useNavigate(); // For back navigation
  const [transactionId, setTransactionId] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const trimmedTransactionId = transactionId.trim();
    const parsedAmount = parseFloat(amount);
  
    if (!trimmedTransactionId || isNaN(parsedAmount) || parsedAmount <= 0 || !receipt) {
      setError('Amount, Transaction ID, and Receipt are required.');
      return;
    }
  
    const formData = new FormData();
    formData.append('transactionId', trimmedTransactionId);
    formData.append('amount', parsedAmount);
    formData.append('receipt', receipt);
  
    try {
      // API call to submit fund request
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://only-backend-je4j.onrender.com/api/wallet/add-funds',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      setMessage(response.data.message);
      setError('');
      setTransactionId('');
      setAmount('');
      setReceipt(null);
    } catch (err) {
      console.error('Error submitting fund request:', err);
      setMessage('');
      setError(err.response?.data?.message || 'Failed to submit fund request.');
    }
  };  

  const handleReceiptChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-5 flex flex-col items-center">
      {/* Back Arrow and Title */}
      <div className="flex items-center w-full max-w-md mb-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-transparent text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
          aria-label="Go Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold ml-4">Add Coins</h2>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-md mb-4">
        <img
          src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/a3202e58-17ef-11ee-9a70-8e93953183bb/cleaned_qr.png"
          alt="Payment QR Code"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Amount Input */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-1">
              Enter Number of Coins:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter number of coins."
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Transaction ID Input */}
          <div>
            <label htmlFor="transactionId" className="block text-sm font-medium mb-1">
              Settlement ID (UTR Number):
            </label>
            <input
              type="text"
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter transaction ID"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Receipt Upload */}
          <div>
            <label htmlFor="receipt" className="block text-sm font-medium mb-1">
              Upload Receipt (Required):
            </label>
            <input
              type="file"
              id="receipt"
              accept="image/*"
              onChange={handleReceiptChange}
              className="w-full bg-gray-700 text-white py-2 rounded-lg"
              required
            />
            {error && !receipt && (
              <p className="text-red-500 text-sm mt-1">Receipt is required.</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Success and Error Messages */}
        {message && (
          <p className="text-green-500 text-center mt-4 font-semibold">{message}</p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>
        )}
      </div>
    </div>
  );
};

export default AddFunds;
