import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchSingleProduct,
  updateFirstProductImage,
  updateProduct,
} from "../../../Redux/car/CarSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Initialize state with empty strings for controlled inputs
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
  });

  const [carImage1, setCarImage1] = useState(null); // State for the selected image fi
  const [imagePreview, setImagePreview] = useState(null);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCarImage1(file);

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    if (carImage1) {
      const formData = new FormData();
      formData.append("carImage1", carImage1); // Append the selected file
      dispatch(updateFirstProductImage({ id, carImage1: formData }));
    }
  };

  const { product, isLoading, error } = useSelector((state) => state.car);

  useEffect(() => {
    // Fetch the single product by id when the page loads
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setFormData({
        brand: product.brand || "",
        brandModel: product.brandModel || "",
        year: product.year || "",
        category: product.category || "",
        fuel: product.fuel || "",
        transmission: product.transmission || "",
        seat: product.seat || "",
        bootCapacity: product.bootCapacity || "",
        dailyRent: product.dailyRent || "",
        weeklyRent: product.weeklyRent || "",
        monthlyRent: product.monthlyRent || "",
        description1: product.description1 || "",
        description2: product.description2 || "",
      });
      if (product.carImage1?.imagePath) {
        setImagePreview(product.carImage1.imagePath);
      }
      setCarImage1(product.carImage1 || null); // Set initial image if available
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Create a FormData object to handle the file upload
    const updatedProduct = new FormData();
    updatedProduct.append("brand", formData.brand);
    updatedProduct.append("brandModel", formData.brandModel);
    updatedProduct.append("year", formData.year);
    updatedProduct.append("category", formData.category);
    updatedProduct.append("fuel", formData.fuel);
    updatedProduct.append("transmission", formData.transmission);
    updatedProduct.append("seat", formData.seat);
    updatedProduct.append("bootCapacity", formData.bootCapacity);
    updatedProduct.append("dailyRent", formData.dailyRent);
    updatedProduct.append("weeklyRent", formData.weeklyRent);
    updatedProduct.append("monthlyRent", formData.monthlyRent);
    updatedProduct.append("description1", formData.description1);
    updatedProduct.append("description2", formData.description2);

    // Check the values being appended to FormData
    console.log(
      "Updated Product Data Before Dispatch:",
      Object.fromEntries(updatedProduct)
    ); // Convert FormData to an object for easier logging
    console.log("Form Data:", formData); // Log formData to see the values in state
    console.log("Product ID:", id); // Log the product ID to ensure it is correct

    // Dispatch the updateProduct action with the ID and updated product data
    dispatch(updateProduct({ id, updatedProduct })); // Pass the object with updatedProduct
  };

  const handleDelete = () => {
    dispatch(deleteProduct(id));
    // navigate("/"); // Redirect to home page after deletion
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  return (
    <div>
      <h2>Update or Delete Product</h2>
      <div>
        {" "}
        <h3>Update Image</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            style={{ width: "200px", height: "auto" }}
          />
        )}
        <button onClick={handleImageUpload} className="upload-button">
          Upload Image
        </button>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Brand Model</label>
            <input
              type="text"
              name="brandModel"
              value={formData.brandModel} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              name="year"
              value={formData.year} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Fuel</label>
            <input
              type="text"
              name="fuel"
              value={formData.fuel} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Transmission</label>
            <input
              type="text"
              name="transmission"
              value={formData.transmission} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Seat</label>
            <input
              type="text"
              name="seat"
              value={formData.seat} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Boot Capacity</label>
            <input
              type="text"
              name="bootCapacity"
              value={formData.bootCapacity} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Daily Rent</label>
            <input
              type="text"
              name="dailyRent"
              value={formData.dailyRent} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Weekly Rent</label>
            <input
              type="text"
              name="weeklyRent"
              value={formData.weeklyRent} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Monthly Rent</label>
            <input
              type="text"
              name="monthlyRent"
              value={formData.monthlyRent} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Description 1</label>
            <input
              type="text"
              name="description1"
              value={formData.description1} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Description 2</label>
            <input
              type="text"
              name="description2"
              value={formData.description2} // Controlled input
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Update Product
          </button>
        </form>
      </div>
      <button onClick={handleDelete} className="delete-button">
        Delete Product
      </button>
    </div>
  );
};

export default ProductDetail;
