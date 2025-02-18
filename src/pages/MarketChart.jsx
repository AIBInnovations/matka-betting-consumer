import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";

const MarketChart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const marketId = location.state?.marketId || "MKT-1736254337623"; // Ensure a valid market ID

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("❌ No authentication token found! Redirecting to login...");
          navigate("/login");
          return;
        }

        console.log("📢 Fetching Market Results for Market ID:", marketId);
        console.log("🔑 Token being sent:", token);

        const response = await axios.get(
          `https://only-backend-je4j.onrender.com/api/markets/get-results/${marketId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("✅ API Response:", response.data);
        setResults(response.data);
      } catch (error) {
        console.error(
          "❌ Error fetching market results:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (marketId) {
      fetchResults();
    } else {
      console.error("❌ Market ID is missing. Cannot fetch results.");
    }
  }, [marketId, navigate]);

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white">
      <button
        className="text-white text-lg mb-4 flex items-center space-x-2 hover:scale-110 transition-transform"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </button>

      <h2 className="text-2xl font-bold text-center mb-4">
        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
        Market Chart
      </h2>

      <div className="bg-gray-800 p-4 rounded-md shadow-md overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-gray-400">
              <th className="p-2 border-b border-gray-700">Date</th>
              <th className="p-2 border-b border-gray-700">Open Number</th>
              <th className="p-2 border-b border-gray-700">Jodi Result</th>
              <th className="p-2 border-b border-gray-700">Close Number</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((entry, index) => (
                <tr key={index} className="text-green-400">
                  <td className="p-2 border-b border-gray-700">{entry.date}</td>
                  <td className="p-2 border-b border-gray-700">{entry.openNumber}</td>
                  <td className="p-2 border-b border-gray-700 font-bold">{entry.jodiResult}</td>
                  <td className="p-2 border-b border-gray-700">{entry.closeNumber}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-yellow-400">
                  No results found for this market.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketChart;
