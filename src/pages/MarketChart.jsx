import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";

const MarketChart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const marketName = location.state?.marketName || "Unknown Market";

  // Sample last 14 days' data
  const sampleChartData = [
    { date: "2024-02-13", result: "12345123" },
    { date: "2024-02-12", result: "23456234" },
    { date: "2024-02-11", result: "34567345" },
    { date: "2024-02-10", result: "45678456" },
    { date: "2024-02-09", result: "56789567" },
    { date: "2024-02-08", result: "67890678" },
    { date: "2024-02-07", result: "78901789" },
    { date: "2024-02-06", result: "89012890" },
    { date: "2024-02-05", result: "90123901" },
    { date: "2024-02-04", result: "12389123" },
    { date: "2024-02-03", result: "78906789" },
    { date: "2024-02-02", result: "65432654" },
    { date: "2024-02-01", result: "98712987" },
    { date: "2024-01-31", result: "32154321" }
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
      <h2 className="text-2xl font-bold text-center mb-4">
        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
        {marketName} - Last 14 Days Chart
      </h2>

      {/* Calendar Table */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="text-gray-400">
              <th className="p-2 border-b border-gray-700">Date</th>
              <th className="p-2 border-b border-gray-700">Sunday</th>
              <th className="p-2 border-b border-gray-700">Monday</th>
              <th className="p-2 border-b border-gray-700">Tuesday</th>
              <th className="p-2 border-b border-gray-700">Wednesday</th>
              <th className="p-2 border-b border-gray-700">Thursday</th>
              <th className="p-2 border-b border-gray-700">Friday</th>
              <th className="p-2 border-b border-gray-700">Saturday</th>
            </tr>
          </thead>
          <tbody>
            {/* Display each day's result in XXX / XX / XXX format */}
            {Array(2).fill("").map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className="p-2 border-b border-gray-700 font-semibold text-yellow-400">
                  {rowIndex === 0 ? "Last Week" : "This Week"}
                </td>
                {sampleChartData.slice(rowIndex * 7, rowIndex * 7 + 7).map((entry, index) => {
                  const formattedResult = formatResult(entry.result);
                  return (
                    <td
                      key={index}
                      className="p-2 border-b border-gray-700 font-semibold text-green-400"
                    >
                      <div className="text-lg">{formattedResult[0]}</div>
                      <div className="text-sm">{formattedResult[1]}</div>
                      <div className="text-lg">{formattedResult[2]}</div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketChart;
