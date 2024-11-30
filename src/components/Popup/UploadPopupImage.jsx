import { useState } from "react";
import axios from "axios";

const UploadPopupImage = () => {
  const [image, setImage] = useState(null); // State to store the selected image
  const [previewUrl, setPreviewUrl] = useState(null); // State to store the preview URL
  const [message, setMessage] = useState(""); // State to store response messages
  const [isUploading, setIsUploading] = useState(false); // State to indicate uploading
  const [isDeleting, setIsDeleting] = useState(false); // State to indicate deleting

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      setPreviewUrl(URL.createObjectURL(selectedImage));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("popupImage", image);

    try {
      setIsUploading(true);
      setMessage("");

      const response = await axios.post(
        `${import.meta.env.VITE_URL}anytime/UpdateFirstImage`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setIsUploading(false);
    }
  };

  // Handle image deletion
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      setMessage("");

      const response = await axios.delete(
        `${import.meta.env.VITE_URL}anytime/deleteFirstImage`,
        { withCredentials: true }
      );

      if (response.data.success) {
        setMessage("Image deleted successfully.");
        setPreviewUrl(null); // Clear the preview
      } else {
        setMessage(response.data.message || "Failed to delete image.");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      setMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Upload Popup Image</h2>

      {message && <p style={{ color: "blue" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Select Image:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>

        {previewUrl && (
          <div style={{ marginBottom: "10px" }}>
            <img
              src={previewUrl}
              alt="Image preview"
              style={{ width: "100%", height: "auto", marginBottom: "10px" }}
            />
          </div>
        )}

        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Image"}
        </button>
      </form>

      <button
        onClick={handleDelete}
        disabled={isDeleting}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "4px",
          cursor: isDeleting ? "not-allowed" : "pointer",
        }}
      >
        {isDeleting ? "Deleting..." : "Delete Image"}
      </button>
    </div>
  );
};

export default UploadPopupImage;
