import { useState } from "react";
import PropTypes from 'prop-types';

const CarFilterCategory = ({ onFilterChange }) => {
  // Manage the state for selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Update the selected categories and call the parent function to filter cars
  const handleCheckboxChange = (category) => {
    // Toggle the category in the selectedCategories array
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories); // Pass selected categories to the parent component
  };

  return (
    <div className="dropdown dropdown-filter">
      
      <button
        className="btn btn-dropdown dropdown-toggle m-0"
        id="dropdownCategory1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Categories</span>
        <span className="arrow-indicator">
          <span className="arrow-down">&#9660;</span>
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-light"
        aria-labelledby="dropdownCategory1"
      >
        <li>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="SUV"
                checked={selectedCategories.includes("SUV")}
                onChange={() => handleCheckboxChange("SUV")}
              />
              SUV
            </label>
          </div>
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Sedan"
                checked={selectedCategories.includes("Sedan")}
                onChange={() => handleCheckboxChange("Sedan")}
              />
              Sedan
            </label>
          </div>
         
          <div className="dropdown-item checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="Mini SUV"
                checked={selectedCategories.includes("Mini SUV")}
                onChange={() => handleCheckboxChange("Mini SUV")}
              />
              Mini SUV
            </label>
          </div>
          {/* Add more categories as needed */}
        </li>
      </ul>
    </div>
  );
};

CarFilterCategory.propTypes = {
  onFilterChange: PropTypes.func.isRequired, // Expecting a function prop
};


export default CarFilterCategory;
