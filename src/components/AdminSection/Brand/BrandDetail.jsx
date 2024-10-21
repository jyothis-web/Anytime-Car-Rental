import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Brand.css";
import {
  updateBrand,
  deleteBrand,
  fetchBrands,
} from "../../../Redux/Brand/BrandSlice";


const BrandDetail = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { brands, isLoading, error } = useSelector((state) => state.brand);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    // Fetch brands if not loaded
    if (!brands || brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [dispatch, brands]);

  // Find the brand by ID
  const selectedBrand = brands.find((b) => b._id === id);

  useEffect(() => {
    if (selectedBrand) {
      setBrand(selectedBrand.brand);
    }
  }, [selectedBrand]);

  const handleUpdate = () => {
    dispatch(updateBrand({ id, brand }));
  };

  const handleDelete = () => {
    dispatch(deleteBrand(id));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="brand-details">
      <h2 className="brand-heading">Brand Details</h2>
      <div className="form-group">
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Enter new brand name"
          className="input-field"
        />
      </div>
      <button
        className="submit-button"
        onClick={handleUpdate}
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Update Brand"}
      </button>
      <button
        className="delete-button"
        onClick={handleDelete}
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete Brand"}
      </button>
    </div>
  );
};

export default BrandDetail;
