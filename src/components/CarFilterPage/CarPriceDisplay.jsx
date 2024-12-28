import PropTypes from "prop-types";

const CarPriceDisplay = ({ car }) => {

  const dailyRent = car.dailyRent ?? 0; // Default to 0 if null or undefined
  const weeklyRent = car.weeklyRent ?? 0;
  const monthlyRent = car.monthlyRent ?? 0;

  return (
    <div style={{maxWidth:"120px"}}>
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
              <span style={{ fontWeight: "600" }}>QAR {dailyRent}</span>
            </div>
            <div className="dropdown-item">
              Weekly -{" "}
              <span style={{ fontWeight: "600" }}>QAR {weeklyRent}</span>
            </div>
            <div className="dropdown-item">
              Monthly -{" "}
              <span style={{ fontWeight: "600" }}>QAR {monthlyRent}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

CarPriceDisplay.propTypes = {
  car: PropTypes.shape({
    dailyRent: PropTypes.number,
    weeklyRent: PropTypes.number,
    monthlyRent: PropTypes.number,
  }).isRequired,
};


export default CarPriceDisplay;
