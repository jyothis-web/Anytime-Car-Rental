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

  useEffect(() => {
    console.log("Fetched products:", products);
  }, [products]);

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
         style={{color:"black"}}
        />

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product,index) => (
              <div key={index} className="product-item">
                <p>Brand: {product.brand}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {" "}
                  {/* Container for images */}
                  {product.carImage1 && (
                    <img
                      src={`${import.meta.env.VITE_URL}${product.carImage1.imagePath}`} // Corrected path reference
                      alt={`Image of ${product.brand} ${product.brandModel}`}
                      style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "cover",
                      }} // Adjust size as needed
                    />
                  )}
                  {product.carImage2 && (
                    <img
                      src={`${import.meta.env.VITE_URL}${product.carImage2.imagePath}`}
                      alt={`Image of ${product.brand} ${product.brandModel}`}
                      style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {product.carImage3 && (
                    <img
                      src={`${import.meta.env.VITE_URL}${product.carImage3.imagePath}`}
                      alt={`Image of ${product.brand} ${product.brandModel}`}
                      style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {product.carImage4 && (
                    <img
                      src={`${import.meta.env.VITE_URL}${product.carImage4.imagePath}`}
                      alt={`Image of ${product.brand} ${product.brandModel}`}
                      style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {product.carImage5 && (
                    <img
                      src={`${import.meta.env.VITE_URL}${product.carImage5.imagePath}`}
                      alt={`Image of ${product.brand} ${product.brandModel}`}
                      style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {product.carImage6 && (
                    <img
                      src={`${import.meta.env.VITE_URL}${product.carImage6.imagePath}`}
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
                <p>transmission: {product.transmission}</p>
                <p>doors: {product.doors}</p>
                <p>Seat: {product.seat}</p>
                <p>Boot Capacity: {product.bootCapacity}</p>
                
                <p>daily price: QAR {product.dailyRent}</p>
                <p>weekly price: QAR {product.weeklyRent}</p>
                <p>monthly price: QAR {product.monthlyRent}</p>
                <p>Description 1: {product.description1}</p>
                <p>
                  Description 2:{product.description2}
                 
                </p>
                <Link to={`/car/${product._id}`}>
                  {" "}
                  <h3>Update</h3>{" "}
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
