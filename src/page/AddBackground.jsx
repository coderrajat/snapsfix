import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './AddBackground.css';

const API_URL = import.meta.env.VITE_API_URL;

const AddBackground = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Store the main image file
  const [backgroundType, setBackgroundType] = useState('predefined');
  const [selectedBgImageFile, setSelectedBgImageFile] = useState(null); // Store the background file
  const [predefinedBackground, setPredefinedBackground] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file)); // Display preview URL
    setImageFile(file); // Store the actual file for uploading
  };

  const handleBackgroundUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedBgImageFile(file); // Store background as file
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('image', imageFile);

    // Add background based on selected type
    if (backgroundType === 'predefined') {
      formData.append('background', predefinedBackground);
    } else if (backgroundType === 'custom' && selectedBgImageFile) {
      formData.append('background', selectedBgImageFile); // Append background as file
    }

    setLoading(true);

    axios.post(`${API_URL}/api/add-background/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        setProcessedImage(`data:image/png;base64,${response.data.image}`);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error processing background:", error);
        setLoading(false);
      });
  };

  const processImage = () => {
    if (imageFile) {
      uploadImage();
    }
  };

  return (
    <div className="add-background-page">
      <header className="header">
        <div className="logo">SNAPSFIX</div>
        <nav>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className="main-section">
        <h1>Change Image Background</h1>
        <p>Upload an image and change its background with a predefined or custom background.</p>

        <Dropzone onDrop={handleImageUpload} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag & Drop or Select an Image</p>
            </div>
          )}
        </Dropzone>

        <div className="background-type">
          <h3>Select Background Type</h3>
          <div>
            <label>
              <input
                type="radio"
                name="backgroundType"
                value="predefined"
                checked={backgroundType === 'predefined'}
                onChange={() => setBackgroundType('predefined')}
              />
              Predefined
            </label>
            <label>
              <input
                type="radio"
                name="backgroundType"
                value="custom"
                checked={backgroundType === 'custom'}
                onChange={() => setBackgroundType('custom')}
              />
              Upload Background
            </label>
          </div>
        </div>

        {backgroundType === 'predefined' && (
          <div className="predefined-backgrounds">
            <h3>Select a Predefined Background</h3>
            <div className="predefined-options">
              <img
                src="/path-to-bg1.jpg"
                alt="bg1"
                onClick={() => setPredefinedBackground('/path-to-bg1.jpg')}
              />
              <img
                src="/path-to-bg2.jpg"
                alt="bg2"
                onClick={() => setPredefinedBackground('/path-to-bg2.jpg')}
              />
            </div>
          </div>
        )}

        {backgroundType === 'custom' && (
          <Dropzone onDrop={handleBackgroundUpload} accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag & Drop or Select a Background Image</p>
              </div>
            )}
          </Dropzone>
        )}

        <div className="preview-section">
          {loading && <p>Processing...</p>}
          {processedImage ? (
            <div className="image-preview">
              <h3>Processed Image Preview</h3>
              <img src={processedImage} alt="Processed" />
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

        {selectedImage && (
          <div className="action-buttons">
            <button onClick={processImage}>Process Image</button>
            {processedImage && (
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
            )}
            <button onClick={() => setSelectedImage(null)}>Retry</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AddBackground;
