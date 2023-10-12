import React, { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height);
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const bmiCategory = bmi ? getBMICategory(parseFloat(bmi)) : "";

  return (
    <div className="flex flex-col items-center mt-10 bg-black-400">
      <h1 className="text-3xl mb-5 text-gray-800 font-bold">BMI Calculator</h1>

      <div className="flex mb-4">
        <input
          type="number"
          placeholder="Enter height (m)"
          className="w-1/2 p-3 border border-gray-300 mr-2 rounded-lg"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter weight (kg)"
          className="w-1/2 p-3 border border-gray-300 rounded-lg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-8 bg-gray-100 p-5 rounded-lg shadow-lg">
          <div className="text-xl font-semibold mb-2">Your BMI is: {bmi}</div>
          <div className="text-lg">BMI Category: {bmiCategory}</div>
          <div className="mt-4 w-full bg-blue-500 h-10 rounded-full relative">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{
                width: `${(bmi / 40) * 100}%`,
                border: "1px solid red", 
                boxSizing: "border-box", 
              }}
            >
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMI;
