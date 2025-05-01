import React, { useState } from 'react';
import axios from '../utils/axiosConfig';

const PhotographerUpload = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      await axios.post('/api/projects/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Upload successful!');
    } catch (err) {
      alert('Upload failed: ' + err.response?.data?.error);
    }
  };

  return (
    <div>
      <h2>Upload Raw Images</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};