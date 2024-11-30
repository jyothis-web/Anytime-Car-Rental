import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div className="navigation-buttons">
        <Link to="/createcar">
          <Button variant="outlined" className="nav-button">Create cars</Button>
        </Link>
        <Link to="/ProductPage">
          <Button variant="outlined" className="nav-button">Manage cars</Button>
        </Link>
        <Link to="/UploadPopupImage">
          <Button variant="outlined" className="nav-button"> upload popupimage </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
