import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductCreation.css"; // Import CSS file
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../Redux/car/CarSlice";

const ProductView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const { products = [] } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.brandModel
      ? product.brandModel.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  return (
    <div>
      <h2 className="brand-heading">View Product</h2>

      <div className="product-list-section">
        <input
          type="text"
          placeholder="Search by brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ color: "black" }}
        />

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="product-item">
              <p>Brand: {product.brand}</p>
            
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {/* Check and render images dynamically */}
                {product.carImage1?.imagePath && (
                  <img
                    src={product.carImage1.imagePath}
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{
                      width: "200px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
                {product.carImage2?.imagePath && (
                  <img
                    src={`${product.carImage2.imagePath}`}
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{
                      width: "200px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
                {product.carImage3?.imagePath && (
                  <img
                    src={`${product.carImage3.imagePath}`}
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{
                      width: "200px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
                {product.carImage4?.imagePath && (
                  <img
                    src={`${product.carImage4.imagePath}`}
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{
                      width: "200px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
                {product.carImage5?.imagePath && (
                  <img
                    src={`${product.carImage5.imagePath}`}
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{
                      width: "200px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
                {product.carImage6?.imagePath && (
                  <img
                    src={`${product.carImage6.imagePath}`}
                    alt={`Image of ${product.brand} ${product.brandModel}`}
                    style={{
                      width: "200px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            
              <p>Brand Model: {product.brandModel}</p>
              <p>Category: {product.category}</p>
              <p>Fuel: {product.fuel}</p>
              <p>Transmission: {product.transmission}</p>
              <p>Doors: {product.doors}</p>
              <p>Seat: {product.seat}</p>
              <p>Boot Capacity: {product.bootCapacity}</p>
            
              <p>Daily Price: QAR {product.dailyRent}</p>
              <p>Weekly Price: QAR {product.weeklyRent}</p>
              <p>Monthly Price: QAR {product.monthlyRent}</p>
              <p>Description 1: {product.description1}</p>
              <p>Description 2: {product.description2}</p>
              <Link to={`/car/${product._id}`}>
                <h3>Update</h3>
              </Link>
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

export default ProductView;
