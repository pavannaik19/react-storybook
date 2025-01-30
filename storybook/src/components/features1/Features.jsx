import React, { useState } from "react";
import "./Features.css";

const Featuress = () => {
  const [showAll, setShowAll] = useState(false);

  const features = [
    "Keyless Entry",
    "Central Locking",
    "Air Conditioner",
    "Bluetooth Connectivity",
    "Touchscreen",
    "Steering Mounted Controls",
  ];

  const additionalCategories = [
    "Comfort",
    "Interior",
    "Exterior",
    "Safety",
    "Entertainment",
  ];

  return (
    <div className="features-container">
      <h2 className="features-title">Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="check-icon">✔</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button
        className="toggle-button"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "Hide Features ▲" : "View all Features ▼"}
      </button>
      {showAll && (
        <div className="additional-features">
          {additionalCategories.join(" | ")}
        </div>
      )}
    </div>
  );
};

export default Featuress;
