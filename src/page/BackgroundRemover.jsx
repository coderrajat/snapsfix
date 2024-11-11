import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './BackgroundRemoval.css'; // Custom styles

const url =import.meta.env.VITE_API_URL

console.log(import.meta.env.VITE_API_URL)
function BackgroundRemover() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle image upload and processing
    const handleImageUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
        setLoading(true);

        const formData = new FormData();
        formData.append('image', file); // Set key to 'image'

        axios.post(`${url}/api/remove-background/`, formData)
        .then((response) => {
          console.log(response,'image')
          setProcessedImage(`data:image/png;base64,${response.data.result_b64}`);; // Display base64 image
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });
    };

    return (
        <div className="background-removal-page">
            <header className="header">
                <div className="logo">SNAPSFIX</div>
                <nav>
                    <a href="/login">Login</a>
                </nav>
            </header>

            <main className="main-section">
                <h1>Remove Background from Your Image</h1>
                <p>Upload an image, and we’ll remove the background instantly.</p>

                {/* Image Upload Section */}
                <Dropzone onDrop={handleImageUpload} accept="image/*" multiple={false}>
                    {({ getRootProps, getInputProps }) => (
                        <div className="dropzone" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag & Drop or Select an Image</p>
                        </div>
                    )}
                </Dropzone>

                {/* Preview Section */}
                <div className="preview-section">
                    {loading && <p>Processing...</p>}
                    {selectedImage && (
                        <div className="image-preview">
                            <h3>Original Image</h3>
                            <img src={selectedImage} alt="Selected" />
                        </div>
                    )}
                    {processedImage && (
                        <div className="image-preview">
                            <h3>Processed Image</h3>
                            <img src={processedImage} alt="Processed" />
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                {processedImage && (
                    <div className="action-buttons">
                        <button onClick={() => setProcessedImage(null)}>Download Image</button>
                        <button onClick={() => setSelectedImage(null)}>Retry</button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default BackgroundRemover;
