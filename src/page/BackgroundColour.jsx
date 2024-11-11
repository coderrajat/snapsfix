import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import './BackgroundColour.css';

const API_URL = import.meta.env.VITE_API_URL;

const BackgroundColour = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  const handleImageUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file));
    uploadImage(file);
  };

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('color', backgroundColor);

    setLoading(true);

    axios.post(`${API_URL}/api/add-bg-color/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        setProcessedImage(response.data.image ? `data:image/png;base64,${response.data.image}` : null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error applying background color:", error);
        setLoading(false);
      });
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div className="background-color-changer-page">
      <header className="header">
        <div className="logo">SNAPSFIX</div>
        <nav>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className="main-section">
        <h1>Add Background Color to Your Image</h1>
        <p>Upload an image, then select a background color to apply it.</p>

        <Dropzone onDrop={handleImageUpload} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag & Drop or Select an Image</p>
            </div>
          )}
        </Dropzone>

        <div className="color-picker">
          <h3>Select Background Color</h3>
          <SketchPicker color={backgroundColor} onChangeComplete={handleColorChange} />
        </div>

        <div className="preview-section">
          {loading && <p>Processing...</p>}
          {processedImage ? (
            <div className="image-preview">
              <h3>Image Preview</h3>
              <img src={processedImage} alt="Processed with Background" />
            </div>
          ) : (
            selectedImage && (
              <div className="image-preview">
                <h3>Image Preview</h3>
                <img src={selectedImage} alt="Selected" />
              </div>
            )
          )}
        </div>

        {processedImage && (
          <div className="action-buttons">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.download = 'image-with-background.png';
                link.href = processedImage;
                link.click();
              }}
            >
              Download Image
            </button>
            <button onClick={() => {
              setSelectedImage(null);
              setProcessedImage(null);
            }}>
              Retry
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BackgroundColour;
