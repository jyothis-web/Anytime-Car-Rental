import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductCreation.css"; // Import CSS file
import { Link } from "react-router-dom";
import { createProduct, fetchProducts } from "../../../Redux/car/CarSlice";

const ProductCreation = () => {
  const [formData, setFormData] = useState({
    brand: "",
    brandModel: "",
    year: "",
    category: "",
    fuel: "",
    transmission: "",
    seat: "",
    bootCapacity: "",
    dailyRent: "",
    weeklyRent: "",
    monthlyRent: "",
    description1: "",
    description2: "",
    imagePreview: null,
  });

  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const dispatch = useDispatch();
  const { products = [], isLoading, error } = useSelector((state) => state.car);

  // Fetching products and brands from the store
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched products:", products);
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formSubmitData = new FormData();
    formSubmitData.append("brand", formData.brand);
    formSubmitData.append("brandModel", formData.brandModel);
    formSubmitData.append("year", formData.year);
    formSubmitData.append("category", formData.category);
    formSubmitData.append("fuel", formData.fuel);
    formSubmitData.append("transmission", formData.transmission);
    formSubmitData.append("seat", formData.seat);
    formSubmitData.append("bootCapacity", formData.bootCapacity);
    formSubmitData.append("dailyRent", formData.dailyRent);
    formSubmitData.append("weeklyRent", formData.weeklyRent);
    formSubmitData.append("monthlyRent", formData.monthlyRent);
    formSubmitData.append("description1", formData.description1);
    formSubmitData.append("description2", formData.description2);
    if (formData.image) {
      formSubmitData.append("image", formData.image);
    }
    if (formData.pdf) {
      formSubmitData.append("pdf", formData.pdf); // Add the PDF file to form data
    }
    dispatch(createProduct(formSubmitData));
  };

  const filteredProducts = products.filter((product) =>
    product.brandModel.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2 className="brand-heading">Create Product</h2>
      <form
        onSubmit={handleSubmit}
        className="product-form"
        encType="multipart/form-data"
      >
        {/* Row 1: Brand and Brand Model */}
        <div className="form-row">
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand"
              value={formData.brand}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Brand Model</label>
            <input
              type="text"
              name="brandModel"
              placeholder="Enter brand model"
              value={formData.brandModel}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Row 2: Year and Category */}
        <div className="form-row">
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              name="year"
              placeholder="Enter year"
              value={formData.year}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Row 3: Fuel and Transmission */}
        <div className="form-row">
          <div className="form-group">
            <label>Fuel</label>
            <input
              type="text"
              name="fuel"
              placeholder="Enter fuel type"
              value={formData.fuel}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Transmission</label>
            <input
              type="text"
              name="transmission"
              placeholder="Enter transmission type"
              value={formData.transmission}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Row 4: Seat and Boot Capacity */}
        <div className="form-row">
          <div className="form-group">
            <label>Seat</label>
            <input
              type="text"
              name="seat"
              placeholder="Enter number of seats"
              value={formData.seat}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Boot Capacity</label>
            <input
              type="text"
              name="bootCapacity"
              placeholder="Enter boot capacity"
              value={formData.bootCapacity}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Row 5: Daily Rent and Weekly Rent */}
        <div className="form-row">
          <div className="form-group">
            <label>Daily Rent</label>
            <input
              type="text"
              name="dailyRent"
              placeholder="Enter daily rent"
              value={formData.dailyRent}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Weekly Rent</label>
            <input
              type="text"
              name="weeklyRent"
              placeholder="Enter weekly rent"
              value={formData.weeklyRent}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Row 6: Monthly Rent and Description 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>Monthly Rent</label>
            <input
              type="text"
              name="monthlyRent"
              placeholder="Enter monthly rent"
              value={formData.monthlyRent}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description 1</label>
            <input
              type="text"
              name="description1"
              placeholder="Enter description 1"
              value={formData.description1}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Row 7: Description 2 */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>Description 2</label>
            <input
              type="text"
              name="description2"
              placeholder="Enter description 2"
              value={formData.description2}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Product"}
        </button>

        {error && <p className="error-message">Error: {error}</p>}
      </form>

      {/* Search and Display Products */}
      <div className="product-list-section">
        <input
          type="text"
          placeholder="Search by brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-field"
        />
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="product-item">
                <p>Brand: {product.brand}</p>

                {product.carImage1 && (
                  <img
                    src={`http://localhost:8080/${product.carImage1.imagePath}`} // Corrected path reference
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{ width: "200px", height: "auto" }} // Adjust size as needed
                  />
                )}

                <p>Brand Model: {product.brandModel}</p>
                <p>Year: {product.year}</p>
                <p>Category: {product.category}</p>
                <p>Fuel: {product.fuel}</p>
                <p>Transmission: {product.transmission}</p>
                <p>Seat: {product.seat}</p>
                <p>Boot Capacity: {product.bootCapacity}</p>
                <p>Daily Rent: {product.dailyRent}</p>
                <p>Weekly Rent: {product.weeklyRent}</p>
                <p>Monthly Rent: {product.monthlyRent}</p>
                <p>Description 1: {product.description1}</p>
                <p>Description 2: {product.description2}</p>
               <Link to={`/car/${product._id}`}> <h3>Update</h3> </Link>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
