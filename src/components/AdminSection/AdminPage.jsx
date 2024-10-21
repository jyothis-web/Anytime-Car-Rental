import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div className="navigation-buttons">
        {/* <Link to="/BrandPage">
          <Button variant="outlined" className="nav-button">Manage Brands</Button>
        </Link> */}
        <Link to="/ProductPage">
          <Button variant="outlined" className="nav-button">Manage cars</Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
