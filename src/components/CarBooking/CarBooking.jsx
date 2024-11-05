import { useState } from "react";
import "./CarBooking.css";
const CarBooking = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const sendMessage = () => {
    const message = `Pick Up Location: ${pickUpLocation}\nDrop Off Location: ${dropOffLocation}\nPick Up Date: ${pickUpDate}\nReturn Date: ${returnDate}`;
    const phoneNumber = "+97471120333";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="car-booking">
        <div className="container">
          <div className="box-search-advance-form background-card wow fadeInUp mb-5">
            <div className="input-container">
              <div className="input-group-form">
                <label className="text-sm-bold neutral-500">
                  Pick Up Location
                </label>
                <input
                  className="form-control input-field"
                  type="text"
                  placeholder="Pick Up Location"
                  value={pickUpLocation}
                  onChange={(e) => setPickUpLocation(e.target.value)}
                  required
                />
              </div>
              <div className="input-group-form">
                <label className="text-sm-bold neutral-500">
                  Drop Off Location
                </label>
                <input
                  className="form-control input-field"
                  type="text"
                  placeholder="Drop Off Location"
                  value={dropOffLocation}
                  onChange={(e) => setDropOffLocation(e.target.value)}
                />
              </div>
              <div className="input-group-form">
                <label className="text-sm-bold neutral-500">Pick Up Date</label>
                <input
                  className="form-control input-field"
                  type="date"
                  value={pickUpDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                  required
                />
              </div>
              <div className="input-group-form">
                <label className="text-sm-bold neutral-500">Return Date</label>
                <input
                  className="form-control input-field"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div className="button-container" >
                <button className="btn btn-brand-2" onClick={sendMessage}  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Send Message
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15L15 8L8 1M15 8L1 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CarBooking;
