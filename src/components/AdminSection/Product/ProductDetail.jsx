import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchSingleProduct,
  updateFirstProductImage,
} from "../../../Redux/car/CarSlice";
import axios from "axios";
import { unwrapResult } from "@reduxjs/toolkit";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [carData, setCarData] = useState({
    brand: "",
    brandModel: "",
    category: "",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "",
    doors: "4",
    seat: "5",
    bootCapacity: "",
    dailyRent: "",
    weeklyRent: "",
    monthlyRent: "",
    description1: "",
    description2: "",
  });
  const [carImages, setCarImages] = useState([
    null,
    null,
    null,
    null,

  ]);
  const [imagePreviews, setImagePreviews] = useState([
    null,
    null,
    null,
    null,
   
  ]);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      // Update the carImages state immutably
      setCarImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file; // Set the new image at the correct index
        return updatedImages;
      });

      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => {
          const updatedPreviews = [...prevPreviews];
          updatedPreviews[index] = reader.result; // Set the preview URL at the correct index
          return updatedPreviews;
        });
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append all images to the form data under the same field name
    carImages.forEach((carImage) => {
      if (carImage) {
        formData.append("carImages", carImage); // Use the same field name for all images
      }
    });
     // Log the FormData entries to check what is being sent
    

    try {
      const resultAction = await dispatch(
        updateFirstProductImage({ id, formData }) // Pass the whole formData object
      );
      unwrapResult(resultAction);
      alert("Images uploaded successfully!");
    } catch (error) {
      alert(`Image upload failed: ${error.message}`);
    }
  };

  const { product, isLoading, error } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setCarData({
        brand: product.brand || "",
        brandModel: product.brandModel || "",
        category: product.category || "",
        fuel: product.fuel || "Petrol",
        transmission: product.transmission || "Automatic",
        mileage: product.mileage || "",
        doors: product.doors || "4",
        seat: product.seat || "5",
        bootCapacity: product.bootCapacity || "",
        dailyRent: product.dailyRent || "",
        weeklyRent: product.weeklyRent || "",
        monthlyRent: product.monthlyRent || "",
        description1: product.description1 || "",
        description2: product.description2 || "",
      });

      // Set image previews if available for all six images
      const imagePreviews = [
        product.carImage1?.imagePath || null,
        product.carImage2?.imagePath || null,
        product.carImage3?.imagePath || null,
        product.carImage4?.imagePath || null,
       
      ];
      setImagePreviews(imagePreviews);

      // Set initial image state for all six images
      const initialImages = [
        product.carImage1 || null,
        product.carImage2 || null,
        product.carImage3 || null,
        product.carImage4 || null,
      
      ];
      setCarImages(initialImages); // Assuming you have an array for images
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Create a FormData object to handle the file upload
    const updatedProduct = new FormData();
    updatedProduct.append("brand", carData.brand);
    updatedProduct.append("brandModel", carData.brandModel);
    updatedProduct.append("category", carData.category);
    updatedProduct.append("fuel", carData.fuel);
    updatedProduct.append("transmission", carData.transmission);
    updatedProduct.append("mileage", carData.mileage);
    updatedProduct.append("doors", carData.doors);
    updatedProduct.append("seat", carData.seat);
    updatedProduct.append("bootCapacity", carData.bootCapacity);
    updatedProduct.append("dailyRent", carData.dailyRent);
    updatedProduct.append("weeklyRent", carData.weeklyRent);
    updatedProduct.append("monthlyRent", carData.monthlyRent);
    updatedProduct.append("description1", carData.description1);
    updatedProduct.append("description2", carData.description2);



    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL}Anytime/update-car/${id}`,
        updatedProduct,
        {
          withCredentials: true, // Add this to send cookies with the request
        }
      );

      if (response.data.success) {
        alert("Car updated successfully!");
        // Optionally reset the form data or navigate to another page
      } else {
        alert(response.data.message || "Failed to update car");
      }
    } catch (error) {
      console.error("Error updating car:", error);
      alert("There was an error updating the car");
    }
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
        <div>
          <h3>Update Images</h3>
          <div style={{ display: "flex", gap: "20px" }}>
            {carImages.map((_, index) => (
              <div key={index}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                />
                {imagePreviews[index] && (
                  <img
                    src={imagePreviews[index]}
                    alt={`Image Preview ${index + 1}`}
                    style={{ width: "200px", height: "auto" }}
                  />
                )}
              </div>
            ))}
          </div>
          <button onClick={handleImageUpload} className="upload-button">
            Upload Images
          </button>
        </div>

        <form onSubmit={handleUpdate} className="car-form-container">
          {Object.keys(carData).map((field) => {
            if (field === "brand") {
              return (
                <div key={field} className="car-form-group">
                  <label className="car-form-label">{field}</label>
                  <select
                    name="brand"
                    value={carData.brand}
                    onChange={handleChange}
                    className="car-form-input"
                  >
                    <option value="">Select Brand</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Kia">Kia</option>
                    <option value="Geely">Geely</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Honda">Honda</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Foton">Foton</option>
                    <option value="Nissan">Nissan</option>
                  </select>
                </div>
              );
            } else if (field === "transmission") {
              return (
                <div key={field} className="car-form-group">
                  <label className="car-form-label">{field}</label>
                  <select
                    name="transmission"
                    value={carData.transmission}
                    onChange={handleChange}
                    className="car-form-input"
                  >
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>
              );
            } else if (field === "fuel") {
              return (
                <div key={field} className="car-form-group">
                  <label className="car-form-label">{field}</label>
                  <select
                    name="fuel"
                    value={carData.fuel}
                    onChange={handleChange}
                    className="car-form-input"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
              );
            } else if (field === "category") {
              return (
                <div key={field} className="car-form-group">
                  <label className="car-form-label">{field}</label>
                  <select
                    name="category"
                    value={carData.category}
                    onChange={handleChange}
                    className="car-form-input"
                  >
                    <option value="">Select category</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Mini SUV">Mini SUV</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Convertible">Convertible</option>
                    <option value="Wagon">Wagon</option>
                    <option value="Van">Van</option>
                  </select>
                </div>
              );
            } else {
              return (
                <div key={field} className="car-form-group">
                  <label className="car-form-label">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={carData[field]}
                    onChange={handleChange}
                    className="car-form-input"
                  />
                </div>
              );
            }
          })}
          <button type="submit" className="car-submit-btn">
            Update Car
          </button>
        </form>
      </div>
      <button onClick={handleDelete} className="car-submit-btn">
        Delete Product
      </button>
    </div>
  );
};

export default ProductDetail;
