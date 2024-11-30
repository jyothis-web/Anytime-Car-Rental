
import "../Login/Login.css";
import { useState } from "react";
import axios from "axios";
import {Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email,password);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send the request with credentials
      const response = await axios.post(`${import.meta.env.VITE_URL}auth/login`, {
        email,
        password,
      },{
        withCredentials: true,
      }
    );
  
      console.log(response.data);
  
      // Navigate to the AdminPage if the login is successful
      navigate("/AdminPage");
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {" "}
      <form onSubmit={handleSubmit}>
        <Card
          className="login-card"
          sx={{
            width: "350px",
            padding: "15px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h2>Admin Login Page</h2>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bluebtn" type="submit">
            Log in
          </button>
          <div>
            {" "}
          </div>
        </Card>
      </form>
    </div>
  );
};

export default UserLogin;
