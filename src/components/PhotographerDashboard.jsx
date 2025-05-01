import React, { useState } from 'react';
import axios from '../utils/axiosConfig';

const PhotographerDashboard = () => {
  const [files, setFiles] = useState([]);
  const [projectId, setProjectId] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach(file => formData.append('images', file));
    formData.append('projectId', projectId);

    try {
      await axios.post('/api/projects/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Upload successful!');
    } catch (err) {
      alert('Upload failed: ' + err.response?.data?.message);
    }
  };

  return (
    <div className="upload-container">
      <h2>Photography Upload</h2>
      <input
        type="text"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />
      <input
        type="file"
        multiple
        onChange={(e) => setFiles([...e.target.files])}
      />
      <button onClick={handleUpload}>Upload Raw Images</button>
    </div>
  );
};