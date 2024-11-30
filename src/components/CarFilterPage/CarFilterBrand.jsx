import { useState } from "react";
import PropTypes from 'prop-types';

const CarFilterBrand = ({ onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCheckboxChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    onFilterChange(updatedBrands); // Only pass selected brands to the parent
  };

  return (
    <div className="dropdown dropdown-filter">
      <button
        className="btn btn-dropdown dropdown-toggle m-0"
        id="dropdownBrand1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Brands</span>
        <span className="arrow-indicator">
          <span className="arrow-down">&#9660;</span>
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-light"
        aria-labelledby="dropdownBrand1"
      >
        <li>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Kia"
                checked={selectedBrands.includes("Kia")}
                onChange={() => handleCheckboxChange("Kia")}
              />
              Kia
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Suzuki"
                checked={selectedBrands.includes("Suzuki")}
                onChange={() => handleCheckboxChange("Suzuki")}
              />
              Suzuki
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Toyota"
                checked={selectedBrands.includes("Toyota")}
                onChange={() => handleCheckboxChange("Toyota")}
              />
              Toyota
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Hyundai"
                checked={selectedBrands.includes("Hyundai")}
                onChange={() => handleCheckboxChange("Hyundai")}
              />
              Hyundai
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Mitsubishi"
                checked={selectedBrands.includes("Mitsubishi")}
                onChange={() => handleCheckboxChange("Mitsubishi")}
              />
              Mitsubishi
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Geely"
                checked={selectedBrands.includes("Geely")}
                onChange={() => handleCheckboxChange("Geely")}
              />
              Geely
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Nissan"
                checked={selectedBrands.includes("Nissan")}
                onChange={() => handleCheckboxChange("Nissan")}
              />
              Nissan
            </label>
          </div>
          {/* Add more brands as needed */}
        </li>
      </ul>
    </div>
  );
};

CarFilterBrand.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CarFilterBrand;
