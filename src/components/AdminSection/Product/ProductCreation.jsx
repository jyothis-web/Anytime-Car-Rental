import { useState } from "react";
import axios from "axios";
// Importing the CSS file
import "./ProductCreation.css";
const CreateCar = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}Anytime/create-new-car`,
        carData
      );
      if (response.data.success) {
        alert("Car created successfully!");
        setCarData({
          brand: "",
          brandModel: "",
          category: "",
          fuel: "Petrol",
          transmission: "automatic",
          mileage: "",
          seat: "",
          bootCapacity: "",
          dailyRent: "",
          weeklyRent: "",
          monthlyRent: "",
          description1: "",
          description2: "",
        });
      } else {
        alert(response.data.message || "Failed to create car");
      }
    } catch (error) {
      console.error("Error creating car:", error);
      alert("There was an error creating the car");
    }
  };

  return (
    <div className="car-form-container">
      <h1 style={{ color: "white" }}>Create Car</h1>
      <form onSubmit={handleSubmit} className="car-form-container">
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
                  <option value="MUV">MUV</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Mini SUV">Mini SUV</option>
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
          Create Car
        </button>
      </form>
    </div>
  );
};

export default CreateCar;
