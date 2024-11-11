import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import './ImageEnhancer.css';

const ImageEnhancer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [scaleFactor, setScaleFactor] = useState(2); // Default scale factor for enhancement
  const canvasRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file));
    setEnhancedImage(null);
  };

  // Enhance image resolution
  const enhanceImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = selectedImage;
    img.onload = () => {
      // Scale canvas dimensions
      const width = img.width * scaleFactor;
      const height = img.height * scaleFactor;
      canvas.width = width;
      canvas.height = height;

      // Draw the original image scaled to the new resolution
      ctx.drawImage(img, 0, 0, width, height);

      // Save the enhanced image
      setEnhancedImage(canvas.toDataURL());
    };
  };

  return (
    <div className="image-enhancer-page">
      <header className="header">
        <div className="logo">SNAPSFIX</div>
        <nav>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className="main-section">
        <h1>Enhance Your Image Quality</h1>
        <p>Upload an image and enhance its resolution.</p>

        {/* Image Upload Section */}
        <Dropzone onDrop={handleImageUpload} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag & Drop or Select an Image</p>
            </div>
          )}
        </Dropzone>

        {/* Scale Factor Input */}
        <div className="scale-factor-input">
          <label htmlFor="scaleFactor">Scale Factor (Resolution): </label>
          <input
            type="number"
            id="scaleFactor"
            value={scaleFactor}
            onChange={(e) => setScaleFactor(parseInt(e.target.value, 10))}
            min="1"
            max="4"
          />
        </div>

        {/* Preview and Enhance Button */}
        <div className="preview-section">
          {selectedImage && (
            <>
              <div className="image-preview">
                <h3>Original Image</h3>
                <img src={selectedImage} alt="Original" />
              </div>
              <button className="enhance-button" onClick={enhanceImage}>Enhance Image</button>
            </>
          )}
        </div>

        {/* Canvas for Image Enhancement */}
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

        {/* Enhanced Image Preview */}
        {enhancedImage && (
          <div className="image-preview">
            <h3>Enhanced Image</h3>
            <img src={enhancedImage} alt="Enhanced" />
            <div className="action-buttons">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.download = 'enhanced-image.png';
                  link.href = enhancedImage;
                  link.click();
                }}
              >
                Download Image
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ImageEnhancer;
