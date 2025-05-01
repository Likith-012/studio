import { useState } from 'react';

const PhotographyUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file before uploading');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      alert('Upload successful!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileChange}
        accept="image/*"
      />
      <button 
        onClick={handleUpload}
        disabled={!file}  // Disable button when no file selected
      >
        Upload Photo
      </button>
    </div>
  );
};

export default PhotographyUpload;