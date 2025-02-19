import React from "react";

const sampleData = [
  {
    date: "22-04-2019 to 28-04-2019",
    results: {
      Monday: { left: [2, 3, 4], center: "34", right: [5, 6, 7] },
      Tuesday: { left: [1, 2, 3], center: "50", right: [4, 5, 6] },
      Wednesday: { left: [3, 4, 5], center: "63", right: [6, 7, 8] },
      Thursday: { left: [4, 5, 6], center: "38", right: [7, 8, 9] },
      Friday: { left: [5, 6, 7], center: "02", right: [8, 9, 0] },
      Saturday: { left: [6, 7, 8], center: "05", right: [9, 0, 1] },
      Sunday: { left: [7, 8, 9], center: "93", right: [0, 1, 2] }
    }
  }
];

const MatkaTable = () => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Matka Market Panel Record</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="p-2 border border-gray-700">Date</th>
              <th className="p-2 border border-gray-700">Monday</th>
              <th className="p-2 border border-gray-700">Tuesday</th>
              <th className="p-2 border border-gray-700">Wednesday</th>
              <th className="p-2 border border-gray-700">Thursday</th>
              <th className="p-2 border border-gray-700">Friday</th>
              <th className="p-2 border border-gray-700">Saturday</th>
              <th className="p-2 border border-gray-700">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((week, index) => (
              <tr key={index} className="text-center bg-gray-800">
                <td className="p-2 border border-gray-700 font-semibold text-yellow-400">{week.date}</td>
                {Object.keys(week.results).map((day, idx) => {
                  const { left, center, right } = week.results[day];
                  return (
                    <td key={idx} className="p-2 border border-gray-700">
                      <table className="w-full border-collapse border border-gray-500">
                        <tbody>
                          {left.map((_, rowIndex) => (
                            <tr key={rowIndex} className="text-center">
                              <td className="border border-gray-700 p-1">{left[rowIndex]}</td>
                              <td className="border border-gray-700 p-1">
                                {rowIndex === 1 ? <strong className="text-2xl">{center}</strong> : ""}
                              </td>
                              <td className="border border-gray-700 p-1">{right[rowIndex]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default MatkaTable;
