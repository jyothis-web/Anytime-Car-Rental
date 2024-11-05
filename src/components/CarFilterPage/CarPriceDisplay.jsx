import PropTypes from "prop-types";

const CarPriceDisplay = ({ car }) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-dropdown dropdown-toggle m-0"
          id="dropdownPriceType"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>View Price</span>{" "}
          {/* You can also include specific price here if needed */}
        </button>
        <ul
          className="dropdown-menu dropdown-menu-light"
          aria-labelledby="dropdownPriceType"
        >
          <li>
            <div className="dropdown-item">
              Daily -{" "}
              <span style={{ fontWeight: "600" }}>QAR {car.dailyRent}</span>
            </div>
            <div className="dropdown-item">
              Weekly -{" "}
              <span style={{ fontWeight: "600" }}>QAR {car.weeklyRent}</span>
            </div>
            <div className="dropdown-item">
              Monthly -{" "}
              <span style={{ fontWeight: "600" }}>QAR {car.monthlyRent}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

CarPriceDisplay.propTypes = {
  car: PropTypes.shape({
    dailyRent: PropTypes.number.isRequired,
    weeklyRent: PropTypes.number.isRequired,
    monthlyRent: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarPriceDisplay;
