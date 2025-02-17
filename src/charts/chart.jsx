import React from "react";

const MatkaCell = ({ openNumbers, jodiResult, closeNumbers }) => {
  return (
    <div className="grid grid-cols-3 items-center text-center bg-orange-300 font-bold w-24 p-2 rounded-md">
      <div className="flex flex-col gap-1 text-sm">
        {openNumbers.map((num, index) => (
          <span key={index}>{num}</span>
        ))}
      </div>
      <div className="text-xl font-bold">{jodiResult}</div>
      <div className="flex flex-col gap-1 text-sm">
        {closeNumbers.map((num, index) => (
          <span key={index}>{num}</span>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <MatkaCell openNumbers={[2, 8, 8]} jodiResult={84} closeNumbers={[2, 4, 8]} />
    </div>
  );
};

export default App;
