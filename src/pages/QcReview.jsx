import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QcReview = () => {
  const [projects, setProjects] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  // Fetch projects needing QC approval
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects?stage=qc_review', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };
    fetchProjects();
  }, []);

  const handleApproval = async (approved) => {
    try {
      await axios.post(`/api/projects/${selectedProject}/qc-approval`, {
        approved,
        comment: approved ? 'Approved by QC' : 'Needs revisions'
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert(`Project ${approved ? 'approved' : 'rejected'} successfully!`);
    } catch (err) {
      console.error('Approval failed:', err);
    }
  };

  return (
    <div className="qc-review">
      <h2>QC Review Panel</h2>
      <div className="project-list">
        {projects.map(project => (
          <div 
            key={project._id}
            className="project-card"
            onClick={() => setSelectedImages(project.images.edited)}
          >
            <h3>{project.client} - {project.jobCardNumber}</h3>
            <p>Images: {project.images.edited?.length || 0}</p>
          </div>
        ))}
      </div>

      <div className="image-review">
        {selectedImages.map(img => (
          <img 
            key={img} 
            src={`http://localhost:5000/${img}`} 
            alt="For review" 
          />
        ))}
        
        {selectedImages.length > 0 && (
          <div className="approval-buttons">
            <button onClick={() => handleApproval(true)}>Approve</button>
            <button onClick={() => handleApproval(false)}>Reject</button>
          </div>
        )}
      </div>
    </div>
  );
};