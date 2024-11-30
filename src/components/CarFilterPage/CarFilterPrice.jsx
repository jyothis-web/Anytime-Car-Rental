import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

const CarFilterPrice = ({ onFilterChange }) => {
  // State to manage the selected price type
  const [selectedPriceType, setSelectedPriceType] = useState("daily");

  // Define different price ranges for daily, weekly, and monthly
  const priceRanges = {
    daily: { min: 100, max: 2000 }, // Adjust these values as needed
    weekly: { min: 100, max: 50000 }, // Adjust these values as needed
    monthly: { min: 1000, max: 800000 }, // Adjust these values as needed
  };

  // State to manage the current min and max prices
  const [minPrice, setMinPrice] = useState(priceRanges[selectedPriceType].min);
  const [maxPrice, setMaxPrice] = useState(priceRanges[selectedPriceType].max);

  const handlePriceTypeChange = (type) => {
    setSelectedPriceType(type);
    setMinPrice(priceRanges[type].min); // Set min price based on type
    setMaxPrice(priceRanges[type].max); // Set max price based on type

    // Notify parent component of the new values
    onFilterChange({
      minPrice: priceRanges[type].min,
      maxPrice: priceRanges[type].max,
      priceType: type,
    });
  };

  const handleSliderChange = (event, newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
    
    // Notify parent component of the new slider values
    onFilterChange({
      minPrice: newValue[0],
      maxPrice: newValue[1],
      priceType: selectedPriceType,
    });
  };

  return (
    <div>
      <button
        className="btn btn-dropdown dropdown-toggle m-0"
        id="dropdownPriceType"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>
          {selectedPriceType.charAt(0).toUpperCase() +
            selectedPriceType.slice(1)}{" "}
          Price
        </span>
        <span className="arrow-indicator">
          <span className="arrow-down">&#9660;</span>
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-light"
        aria-labelledby="dropdownPriceType"
      >
        <li>
          <div
            className="dropdown-item"
            onClick={() => handlePriceTypeChange("daily")}
          >
            Daily
          </div>
          <div
            className="dropdown-item"
            onClick={() => handlePriceTypeChange("weekly")}
          >
            Weekly
          </div>
          <div
            className="dropdown-item"
            onClick={() => handlePriceTypeChange("monthly")}
          >
            Monthly
          </div>
        </li>
      </ul>
      <Slider
        value={[minPrice, maxPrice]}
        min={priceRanges[selectedPriceType].min} // Set min based on selected type
        max={priceRanges[selectedPriceType].max} // Set max based on selected type
        step={2} // Adjust step size as needed
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
      />
      <div className="price-display">
        <p>
           QAR &nbsp;({minPrice} - {maxPrice})
        </p>
      </div>
    </div>
  );
};

CarFilterPrice.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CarFilterPrice;
