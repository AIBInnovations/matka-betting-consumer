import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";

const MarketChart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const marketName = location.state?.marketName || "Unknown Market";

  // Sample last 7 days' data
  const sampleChartData = [
    { date: "2024-02-05", result: "12345123" },
    { date: "2024-02-04", result: "98765987" },
    { date: "2024-02-03", result: "45678456" },
    { date: "2024-02-02", result: "12389123" },
    { date: "2024-02-01", result: "78906789" },
    { date: "2024-01-31", result: "65432654" },
    { date: "2024-01-30", result: "98712987" },
  ];

  // Function to format results as "XXX / XX / XXX"
  const formatResult = (result) => {
    if (result.length === 8) {
      return [
        result.substring(0, 3), // First three digits
        result.substring(3, 5), // Middle two digits
        result.substring(5, 8), // Last three digits
      ];
    }
    return ["N/A", "N/A", "N/A"]; // Default if data is missing
  };

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white">
      {/* Back Button */}
      <button
        className="text-white text-lg mb-4 flex items-center space-x-2 hover:scale-110 transition-transform"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </button>

      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-6">
        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
        {marketName} - Last 7 Days Chart
      </h2>

      {/* Grid Layout for Results */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sampleChartData.map((entry, index) => {
          const formattedResult = formatResult(entry.result);
          return (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md text-center"
            >
              <p className="text-gray-400 text-sm">{entry.date}</p>
              <div className="text-white font-bold text-lg">{formattedResult[0]}</div>
              <div className="text-yellow-300 font-bold text-md">{formattedResult[1]}</div>
              <div className="text-white font-bold text-lg">{formattedResult[2]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketChart;
