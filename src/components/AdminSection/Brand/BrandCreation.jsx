import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand, fetchBrands } from "../../../Redux/Brand/BrandSlice"; // Update path according to your structure
import { Link } from "react-router-dom"; // Import Link
import "./Brand.css";

const BrandCreation = () => {
  const [brand, setBrand] = useState(""); // Brand state
  const [subBrand, setSubBrand] = useState(""); // SubBrand state
  const [category, setCategory] = useState(""); // Category state

  const dispatch = useDispatch();

  const { isLoading, error, brands } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a payload with brand, subBrand, and category
    const payload = {
      brand,
      subBrand,
      category,
    };

    dispatch(createBrand(payload)); // Dispatch the payload
    // setBrand("");
    // setSubBrand("");
    // setCategory("");
  };

  return (
    <div className="brand-management">
      <form onSubmit={handleSubmit} className="brand-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter subBrand"
            value={subBrand}
            onChange={(e) => setSubBrand(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Brand"}
        </button>
        {error && <p className="error-message">Error: {error}</p>}
      </form>

      <h2 className="brand-heading">Brands</h2>
      {isLoading && <p className="loading-message">Loading brands...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      <ul className="brand-list">
        {Array.isArray(brands) && brands.length > 0 ? (
          brands.map((b) => (
            <li key={b._id} className="brand-item">
              <p>
                <strong>Brand:</strong> {b.brand}
              </p>
              <p>
                <strong>SubBrand:</strong> {b.subBrand}
              </p>
              <Link to={`/brand/${b._id}`} className="brand-link">
                <p>
                  <strong>Category:</strong> {b.category}
                </p>
              </Link>
              
              <img
          src={`/images/${b.brand}.webp`} // Using the brand name for the image source
          alt={b.brand} // Set alt text to the brand name
          width={"100px"}
        />
            </li>
          ))
        ) : (
          <p>No brands available</p>
        )}
      </ul>
    </div>
  );
};

export default BrandCreation;
